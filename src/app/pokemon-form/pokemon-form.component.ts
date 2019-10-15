import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';

import { Pokemon } from './../models/PokemonModel';
import { PokemonService, PokemonStoreService } from './../services';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  catches = [];
  userForm : FormGroup;

  constructor(
    private store: PokemonStoreService,
    private formBuilder:FormBuilder,
    private api: PokemonService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      newCatch: ['', Validators.required]
    });
    console.log('pokemons', this.store.pokemons);
  }

  ngOnSubmit() {
    if(!this.userForm.valid) return;
    const pokemonName = this.userForm.controls.newCatch.value.toString().toLowerCase();
    this.api.search(pokemonName)
        .subscribe(
          success => {
            const newPokemon = new Pokemon();
            newPokemon.name = success.name;
            newPokemon.id = success.id;
            newPokemon.image = success.sprites.front_default;
            newPokemon.fullDetails = success;
            this.store.addPokemon(newPokemon);
          },
          error => {
            alert('Pokemon not found');
          }
        );
  }

  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

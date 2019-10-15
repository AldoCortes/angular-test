import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from './../models/PokemonModel';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonStoreService {

  private readonly _pokemons = new BehaviorSubject<Pokemon[]>([]);

  readonly pokemons$ = this._pokemons.asObservable();

  get pokemons(): Pokemon[] {
    return this._pokemons.getValue();
  }

  set pokemons(val: Pokemon[]) {
    this._pokemons.next(val);
  }

  addPokemon(newPokemon: Pokemon) {
    const exists = this.pokemons.find(pokemon => newPokemon.id === pokemon.id);
    if(!exists){
      this.pokemons = [
        ...this.pokemons,
        newPokemon
      ];
    }
  }
}

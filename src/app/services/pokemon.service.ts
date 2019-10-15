import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  endpoint: string = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) {}

  search(searchName: string): Observable<Object> {
    return this.http.get(`${this.endpoint}/pokemon/${searchName}/`);
  }
}
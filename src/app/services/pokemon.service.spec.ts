import { TestBed, inject } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonService]
    });
  });

  it('should be created', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});

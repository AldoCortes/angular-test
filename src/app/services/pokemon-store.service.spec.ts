import { TestBed, inject } from '@angular/core/testing';

import { PokemonStoreService } from './pokemon-store.service';

describe('PokemonStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonStoreService]
    });
  });

  it('should be created', inject([PokemonStoreService], (service: PokemonStoreService) => {
    expect(service).toBeTruthy();
  }));
});

import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  test: any;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.searchTerms.pipe(
      switchMap((term) => this.pokemonService.searchPokemonListFromGraphQL(term))
    )
    
    // this.pokemons$ = this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term) => this.pokemonService.searchPokemonList(term))
    // );
  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.idPokemon];
    this.router.navigate(link);
  }

}

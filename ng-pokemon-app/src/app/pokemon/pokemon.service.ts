import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Apollo, MutationResult } from 'apollo-angular';
import { ApolloQueryResult, gql } from '@apollo/client';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getPokemonListFromGraphQL(): Observable<ApolloQueryResult<{pokemons: Pokemon[]}>>{
    return this.apollo.query({
      query: gql`
        query {
          pokemons {
            idPokemon
            name
            hp
            cp
            picture
            types
            created
          }
        }
      `
    })
  }

  // getPokemonList(): Observable<Pokemon[]> {
  //   return this.http.get<Pokemon[]>('api/pokemons').pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, []))
  //   );
  // }

  getPokemonByIdFromGraphQL(pokemonId: string): Observable<ApolloQueryResult<{pokemonById: Pokemon | undefined}>>{
    const GET_POKEMON_BY_ID = gql`
    query getPokemonById($id: String!) {
      pokemonById(id: $id) {
        idPokemon
        name
        hp
        cp
        picture
        types
        created
      }
    }
  `
    return this.apollo.query({
      query: GET_POKEMON_BY_ID,
      variables: {
        id: pokemonId
      }
    })
  }

  // getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
  //    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, undefined))
  //    );
  // }

  searchPokemonListFromGraphQL(term: string): Observable<ApolloQueryResult<{pokemonsByName: Pokemon[]}>> {
    if (term.length <= 1) {
      return of({
        data: {
          pokemonsByName: []
        },
        loading: false,
        networkStatus: 7,
      });
    }
  
    return this.apollo
      .query({
        query: gql`
          query pokemonsByName($term: String!) {
            pokemonsByName(name: $term) {
              idPokemon
              name
              hp
              cp
              picture
              types
              created
            }
          }
        `,
        variables: { term },
      })
  }

  searchPokemonList(term: string): Observable<Pokemon[]>{
    if(term.length <=1) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updatePokemonFromGraphQL(pokemon: Pokemon): Observable<MutationResult<{updatePokemon: Pokemon}>> {
    const pokemonToUpdate = {
      name: pokemon.name,
      hp: pokemon.hp,
      cp: pokemon.cp,
      types: pokemon.types
    }

    const UPDATE_POKEMON = gql`
    mutation updatePokemon($id: String!, $input: UpdatePokemonInput!) {
      updatePokemon(id: $id, input: $input) {
        idPokemon
        name
        hp
        cp
        picture
        types
      }
    }
  `
    return this.apollo.mutate({
      mutation: UPDATE_POKEMON,
      variables: {
        id: pokemon.idPokemon,
        input: pokemonToUpdate
      }
    })
  }

  // updatePokemon(pokemon: Pokemon): Observable<null> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({'Content-type': 'application/json'})
  //   };
  //   return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, null))
  //   );
  // }

  addPokemonFromGraphQL(pokemon: Pokemon): Observable<MutationResult<{createPokemon: Pokemon}>> {
    const ADD_POKEMON = gql`
    mutation createPokemon($input: CreatePokemonInput!) {
      createPokemon(input: $input) {
        idPokemon
        name
        hp
        cp
        picture
        types
      }
    }
  `
    return this.apollo.mutate({
      mutation: ADD_POKEMON,
      variables: {
        input: pokemon
      }
    })
  }

  // addPokemon(pokemon: Pokemon): Observable<Pokemon> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({'Content-type': 'application/json'})
  //   };

  //   return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, null))
  //   );
  // }

  deletePokemonFromGraphQL(pokemonId: string): Observable<MutationResult<{deletePokemon: {success: boolean}}>> {
    const DELETE_POKEMON = gql`
    mutation deletePokemon($id: String!) {
      deletePokemon(id: $id) {
        success
      }
    }
  `
    return this.apollo.mutate({
      mutation: DELETE_POKEMON,
      variables: {
        id: pokemonId
      }
    })
  }

  // deletePokemonById(pokemonId: string): Observable<null> {
  //   return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, null))
  //   );
  // }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante", 
      "Feu", 
      "Eau", 
      "Insecte", 
      "Normal",
      "Electrique",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy"
    ];
  }
}

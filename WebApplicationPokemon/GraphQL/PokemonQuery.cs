using MongoDB.Bson;
using MongoDB.Driver;
using WebApplicationPokemon.Models;

namespace WebApplicationPokemon.GraphQL
{
    public class PokemonQuery
    {
        /*
         * Obtention de la liste de Pokemons
         */
        public IQueryable<Pokemon> GetPokemons([Service] IMongoCollection<Pokemon> collection)
        {
            return collection.AsQueryable();
        }

        /*
         * Obtention d'un pokemon par son identifiant
         */
        public Pokemon GetPokemonById([Service] IMongoCollection<Pokemon> collection, string Id)
        {
            return collection.Find(pokemon => pokemon.IdPokemon == Id).FirstOrDefault();
        }


        public List<Pokemon> GetPokemonsByName([Service] IMongoCollection<Pokemon> collection, string name)
        {
            return collection.Find(pokemon => pokemon.Name.Contains(name)).ToList<Pokemon>();
        }
    }
}

using MongoDB.Bson;
using MongoDB.Driver;
using WebApplicationPokemon.Models;

namespace WebApplicationPokemon.GraphQL
{
    public class PokemonMutation
    {
        public async Task<Pokemon> CreatePokemonAsync(
           [Service] IMongoCollection<Pokemon> collection,
           CreatePokemonInput input)
        {
            var pokemon = new Pokemon()
            {
                IdPokemon = ObjectId.GenerateNewId().ToString(),
                Name = input.Name,
                Types = input.Types,
                Hp = input.Hp,
                Cp = input.Cp,
                Picture = input.Picture,
                Created = input.Created
            };

            await collection.InsertOneAsync(pokemon);

            return pokemon;
        }

        public async Task<Pokemon> UpdatePokemonAsync(
            [Service] IMongoCollection<Pokemon> collection,
            string Id,
            UpdatePokemonInput input)
        {
            var filter = Builders<Pokemon>.Filter.Eq(pokemon => pokemon.IdPokemon, Id);

            var update = Builders<Pokemon>.Update
                .Set(p => p.Name, input.Name)
                .Set(p => p.Types, input.Types)
                .Set(p => p.Hp, input.Hp)
                .Set(p => p.Cp, input.Cp);

            await collection.UpdateOneAsync(filter, update);

            var updatedPokemon = await collection.Find(filter).FirstOrDefaultAsync();
            return updatedPokemon;
        }

        public async Task<DeletePokemonPayload> DeletePokemonAsync(
            [Service] IMongoCollection<Pokemon> collection,
            string Id)
        {
            var filter = Builders<Pokemon>.Filter.Eq(pokemon => pokemon.IdPokemon, Id);

            var deleteResult = await collection.DeleteOneAsync(filter);

            if (deleteResult.DeletedCount > 0)
            {
                return new DeletePokemonPayload(true);
            }
            else
            {
                return new DeletePokemonPayload(false);
            }
        }
    }
}

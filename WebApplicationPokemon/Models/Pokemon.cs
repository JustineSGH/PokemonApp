using System.Runtime.Serialization;
using System.Security.Cryptography;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace WebApplicationPokemon.Models
{

    public class Pokemon
    {
        
        public ObjectId Id { get; set; }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string IdPokemon { get; set; }

        public string Name { get; set; }

        public int Hp { get; set; }

        public int Cp { get; set; }

        public string Picture { get; set; }

        public List<string> Types { get; set; }

        public string? Created { get; set; }

    }
}

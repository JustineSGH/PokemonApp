using System.Net;

namespace WebApplicationPokemon.Models
{
    public record CreatePokemonInput(
    string Name,
    List<string> Types,
    int Hp,
    int Cp,
    string Picture,
    string Created);
}

namespace WebApplicationPokemon.Models
{
    public record UpdatePokemonInput(
    string Name,
    List<string> Types,
    int Hp,
    int Cp
    );
}

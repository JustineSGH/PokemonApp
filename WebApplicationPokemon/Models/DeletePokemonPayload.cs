namespace WebApplicationPokemon.Models
{
    public class DeletePokemonPayload
    {
        public bool Success { get; }

        public DeletePokemonPayload(bool success)
        {
            Success = success;
        }
    }
}

using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core.Events;
using WebApplicationPokemon.GraphQL;
using WebApplicationPokemon.Models;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services
    .AddSingleton(sp =>
    {
        const string connectionString = "mongodb://localhost:27017";
        var mongoConnectionUrl = new MongoUrl(connectionString);
        var mongoClientSettings = MongoClientSettings.FromUrl(mongoConnectionUrl);
        mongoClientSettings.ClusterConfigurator = cb =>
        {
            // This will print the executed command to the console
            cb.Subscribe<CommandStartedEvent>(e =>
            {
                Console.WriteLine($"{e.CommandName} - {e.Command.ToJson()}");
            });
        };
        var client = new MongoClient(mongoClientSettings);
        var database = client.GetDatabase("PokemonDatabase");
        return database.GetCollection<Pokemon>("Pokemon");
    })
    .AddCors(options =>
    {
        options.AddPolicy(name: MyAllowSpecificOrigins,
            policy =>
            {
                policy.WithOrigins("http://localhost:4200/")
                      .AllowAnyHeader()
                      .AllowAnyOrigin();
            });
    })
    .AddGraphQLServer()
    .AddQueryType<PokemonQuery>()
    .AddMutationType<PokemonMutation>();

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

app.MapGraphQL();

app.Run();

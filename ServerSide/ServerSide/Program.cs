using BL;
using DAL.Models;
using DBAccess;
using Microsoft.EntityFrameworkCore;

//var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddControllers();





//DBActions actions = new DBActions(builder.Configuration);
//var connString = actions.GetConnectionString("CarsDB");
//builder.Services.AddScoped<BLManeger>(b => new BLManeger(connString));
////builder.Services.AddDbContext<CarsContext>(options => options.UseSqlServer(connString))/*;*/
//var app = builder.Build();

//app.MapGet("/", () => "Hello World!");
//app.MapControllers();
//app.Run();


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();


builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://localhost:3000");
        });
});


DBActions actions = new DBActions(builder.Configuration);
var connString = actions.GetConnectionString("CarsDB");
builder.Services.AddScoped(b => new BLManeger(connString));


var app = builder.Build();

app.UseCors("CORSPolicy");
app.MapGet("/", () => "Hello World!");
app.MapControllers();

app.Run();
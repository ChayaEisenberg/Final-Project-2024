using BL;
using DAL.Models;
using DBAccess;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();





DBActions actions = new DBActions(builder.Configuration);
var connString = actions.GetConnectionString("CarsDB");
builder.Services.AddScoped<BLManeger>(b => new BLManeger(connString));
//builder.Services.AddDbContext<CarsContext>(options => options.UseSqlServer(connString))/*;*/
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapControllers();
app.Run();

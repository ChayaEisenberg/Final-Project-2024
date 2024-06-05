using DAL.Api;
using DAL.Implementation;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DalManeger
    {

        public UserRepo userRepo { get; set; }
        public DriveRepo driveRepo { get; set; }
        //public AddressRepo AddressRepo { get; set; }
        public DalManeger(string connstring)
        {
            ServiceCollection services = new();


            services.AddDbContext<CarsContext>(options => options.UseSqlServer(connstring));
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IDriveRepo, DriveRepo>();


            ServiceProvider serviceProvider = services.BuildServiceProvider();
            userRepo = (UserRepo)serviceProvider.GetService<IUserRepo>();
            driveRepo = (DriveRepo)serviceProvider.GetService<IDriveRepo>();
            //AddressRepo = serviceProvider.GetService<AddressRepo>();







        }
    }
}

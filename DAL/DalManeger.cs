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
        
        public UserRepo UserRepo { get; set; }
        //public DriveRepo DriveRepo { get; set; }
        //public AddressRepo AddressRepo { get; set; }
        public DalManeger(string connstring) 
        {
            ServiceCollection services = new();


            services.AddDbContext<CarsContext>(options => options.UseSqlServer(connstring));
            services.AddScoped<IUserRepo, UserRepo>();

         
           ServiceProvider serviceProvider = services.BuildServiceProvider();
            UserRepo = (UserRepo)serviceProvider.GetService<IUserRepo>();
            /*User = (UserService)serviceProvider.GetService<IUserService>();*/
            //DriveRepo = serviceProvider.GetService<DriveRepo>();
            //AddressRepo = serviceProvider.GetService<AddressRepo>();







        }
    }
}

using BL.Api;
using BL.Implementation;
using DAL;

using Microsoft.Extensions.DependencyInjection;

namespace BL
{
    public class BLManeger
    {
        //public AddressDTO Address { get; }
        //public DriveDTO Drive { get; }
        public UserService User { get; }


        public BLManeger(string connString)
        {
            ServiceCollection service = new();
            service.AddScoped<DalManeger>(d => new DalManeger(connString));
            service.AddScoped<IUserService, UserService>();
            //service.AddScoped<AddressDTO>();
            //service.AddScoped<DriveDTO>();

            ServiceProvider serviceProvider = service.BuildServiceProvider();
            //Address = serviceProvider.GetService<AddressDTO>();
            //Drive = serviceProvider.GetService<DriveDTO>();
            User = (UserService)serviceProvider.GetService<IUserService>();

        }
    }
}

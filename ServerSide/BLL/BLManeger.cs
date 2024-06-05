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
        public UserService user { get; }
        public DriveService drive { get; }

        public BLManeger(string connString)
        {
            ServiceCollection service = new();
            service.AddScoped<DalManeger>(d => new DalManeger(connString));
            service.AddScoped<IUserService, UserService>();
            //service.AddScoped<AddressDTO>();
            service.AddScoped<IDriveService, DriveService>();

            ServiceProvider serviceProvider = service.BuildServiceProvider();
            //Address = serviceProvider.GetService<AddressDTO>();
            drive = (DriveService)serviceProvider.GetService<IDriveService>();
            user = (UserService)serviceProvider.GetService<IUserService>();

        }
    }
}

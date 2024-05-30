using BL.DTO;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IUserService
    {
        List<User> GetAllUsers();
        User GetUserByEmail(string email);
        User AddUser(UserDTO user);
        bool DeleteUser(string userName);
        User UpdateUser(string email, UserDTO user);
    }
}

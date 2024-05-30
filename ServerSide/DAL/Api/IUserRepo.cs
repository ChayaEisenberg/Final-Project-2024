using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Api
{
    public interface IUserRepo
    {
        List<User> GetAllUsers();
        User GetUserByEmail(string email);
        User AddUser(User user);
        bool DeleteUser(string userName);
        User UpdateUser(string email, User user);

    }
}
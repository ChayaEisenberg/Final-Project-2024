using DAL.Api;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Implementation
{
    public class UserRepo : IUserRepo
    {
        CarsContext context;
        public UserRepo(CarsContext context)
        {
            this.context = context;
        }

        public User AddUser(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
            return user;
        }

        public bool DeleteUser(string email)
        {
            foreach (var user in context.Users)
            {
                if (user.Email == email)
                {
                    context.Users.Remove(user);
                    context.SaveChanges();
                    return true;
                }
            }
            return false;

        }

        public List<User> GetAllUsers()
        {
            return context.Users.ToList();
        }



        public User GetUserByEmail(string email)

        {
            foreach (var user in context.Users)
            {
                if (user.Email == email)
                {
                    return user;
                }
            }
            return null;
        }

        public User UpdateUser(string email, User user)
        {
            foreach (var item in context.Users)
            {
                if (item.Email == email)
                {

                    item.UserName = user.UserName;
                    item.AboutMe = user.AboutMe;
                    item.AddressId = user.AddressId;
                    item.Points = user.Points;
                    item.Email = email;
                    item.Drives = user.Drives;
                    item.FirstName = user.FirstName;
                    item.LastName = user.LastName;
                    item.Password = user.Password;
    
                }
            }   
            context.SaveChanges();
            return user;
        }
    }


}

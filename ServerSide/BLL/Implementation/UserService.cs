using BL.Api;
using BL.DTO;
using DAL;
using DAL.Api;
using DAL.Implementation;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Implementation
{
    public class UserService : IUserService
    {

        UserRepo userRepo; 
        public UserService(DalManeger dalManeger)
        {
            this.userRepo = dalManeger.userRepo;
        }

        public User AddUser(UserDTO user)
        {
            User u = new User();
            u.UserName = user.UserName;
            u.Email = user.Email;
            u.Password = user.Password;
            u.AboutMe = user.AboutMe;
            u.AddressId = user.AddressId;
            u.Points = user.Points;
            u.FirstName = user.FirstName;
            u.LastName = user.LastName;
            u.PhoneNumber = user.PhoneNumber;
            userRepo.AddUser(u);      
            return u;
        }

        public bool DeleteUser(string email)
        {
            return userRepo.DeleteUser(email);

        }

        public List<User> GetAllUsers()
        {
            return userRepo.GetAllUsers();
        }



        public User GetUserByEmail(string email)

        {
            return userRepo.GetUserByEmail(email);

        }

     

        public User UpdateUser(string email, UserDTO user)
        {
            User u = new User();
            u.UserName = user.UserName;
            u.Email = user.Email;
            u.Password = user.Password;
            u.AboutMe = user.AboutMe;
            u.AddressId = user.AddressId;
            u.Points = user.Points;
            u.FirstName = user.FirstName;
            u.LastName = user.LastName;
            u.PhoneNumber = user.PhoneNumber;
            userRepo.UpdateUser(email, u);
            return u;
        }   
    }
}

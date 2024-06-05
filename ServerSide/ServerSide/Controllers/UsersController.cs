using BL;
using BL.Api;
using BL.DTO;
using BL.Implementation;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace פרוייקט_סופי.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        UserService userService;
        public UsersController(BLManeger blManeger)
        {
            this.userService = blManeger.user;
        }
        [HttpGet]
        public List<User> GetAll()
        {
            return userService.GetAllUsers();

        }
        [HttpGet("{email}")]
        public User GetUserByEmail(string email)
        {
            return userService.GetUserByEmail(email);
        }
        [HttpPut("{email}")]
        public User UpdateUser(string email, UserDTO user)
        {
            return userService.UpdateUser(email, user);
        }
        [HttpPost]
        public User AddUser(UserDTO user) { 
            return userService.AddUser(user);
        }
        [HttpDelete("{email}")]
        public bool DeleteUser(string email)
        {
            return userService.DeleteUser(email);
        }
    }
}

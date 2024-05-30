using AutoMapper;
using BL.DTO;
using DAL.Models;

namespace BLL.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }
}

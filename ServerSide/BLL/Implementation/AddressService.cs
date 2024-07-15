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
    public class AddressService : IAddressService
    {

        AddressRepo AddressRepo; 
        public AddressService(DalManeger dalManeger)
        {
            this.AddressRepo = dalManeger.addressRepo;
        }

        public Address AddAddress(AddressDTO Address)
        {
            Address u = new Address();
            u.AddressId = Address.AddressId;
            u.BuildNumber = Address.BuildNumber;
            u.City = Address.City;
            u.Street = Address.Street;
            u.PlaceDescription = Address.PlaceDescription;
            AddressRepo.AddAddress(u);      
            return u;
        }

        public bool DeleteAddress(int id)
        {
            return AddressRepo.DeleteAddress(id);

        }
        public List<Address> GetAllAddresses()
        {
            return AddressRepo.GetAllAddresses();
        }



        public Address GetAddressById(int id)

        {
            return AddressRepo.GetAddressById(id);

        } 
        public Address UpdateAddress(int id, AddressDTO Address)
        {
            Address u = new Address();
            u.AddressId = Address.AddressId;
            u.BuildNumber = Address.BuildNumber;
            u.City = Address.City;
            u.Street = Address.Street;
            u.PlaceDescription = Address.PlaceDescription;
            AddressRepo.UpdateAddress(id, u);
            return u;
        }

    }
}

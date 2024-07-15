using BL.DTO;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IAddressService
    {
        List<Address> GetAllAddresses();
        Address GetAddressById(int id);
        Address AddAddress(AddressDTO Address);
        bool DeleteAddress(int id);
        Address UpdateAddress(int id, AddressDTO Address);
    }
}

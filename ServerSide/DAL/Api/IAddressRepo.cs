using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Api
{
    public interface IAddressRepo
    {
        List<Address> GetAllAddresses();
        Address GetAddressById(int id);
        Address AddAddress(Address Address);
        bool DeleteAddress(int id);
        Address UpdateAddress(int id, Address Address);

    }
}
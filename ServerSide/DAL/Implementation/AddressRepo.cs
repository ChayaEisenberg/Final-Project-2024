using DAL.Api;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Implementation
{
    public class AddressRepo : IAddressRepo
    {
        CarsContext context;
        public AddressRepo(CarsContext context)
        {
            this.context = context;
        }

        public Address AddAddress(Address Address)
        {
            context.Addresses.Add(Address);
            context.SaveChanges();
            return Address;
        }

        public bool DeleteAddress(int id)
        {
            foreach (var Address in context.Addresses)
            {
                if (Address.AddressId == id)
                {
                    context.Addresses.Remove(Address);
                    context.SaveChanges();
                    return true;
                }
            }
            return false;
        }


        public List<Address> GetAllAddresses()
        {
            return context.Addresses.ToList();
        }

        public Address GetAddressById(int id)
        {
            foreach (var address in context.Addresses)
            {
                if (address.AddressId == id)
                {
                    return address;
                }
            }
            return null;
        }

        public Address UpdateAddress(int id, Address Address)
        {
            foreach (var item in context.Addresses)
            {
                if (Address.AddressId == id)
                {
                    item.AddressId = id;
                    item.Street = Address.Street;
                    item.City = Address.City;
                    item.BuildNumber = Address.BuildNumber;
                    item.PlaceDescription = Address.PlaceDescription;

                }

            }
            context.SaveChanges();
            return Address;
        }
    }


}

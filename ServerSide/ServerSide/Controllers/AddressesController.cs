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
    public class AddressesController : ControllerBase
    {

        AddressService addresseservice;
        public AddressesController(BLManeger blManeger)
        {
            this.addresseservice = blManeger.address;
        }
        [HttpGet]
        public List<Address> GetAll()
        {
            return addresseservice.GetAllAddresses();

        }
        [HttpGet("{id}")]
        public Address GetAddressById(int id)
        {
            return addresseservice.GetAddressById(id);
        }
        [HttpPut("{id}")]
        public Address UpdateAddress(int id, AddressDTO Address)
        {
            return addresseservice.UpdateAddress(id, Address);
        }
        [HttpPost]
        public Address AddAddress(AddressDTO Address) { 
            return addresseservice.AddAddress(Address);
        }
        [HttpDelete("{id}")]
        public bool DeleteAddress(int id)
        {
            return addresseservice.DeleteAddress(id);
        }
    }
}

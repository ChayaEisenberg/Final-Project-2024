using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.DTO
{
    public class UserDTO
    {
        public string UserName { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int AddressId { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string AboutMe { get; set; }

        public string Points { get; set; }

        public virtual ICollection<DriveDTO> Drives { get; set; } = new List<DriveDTO>();
    }
}

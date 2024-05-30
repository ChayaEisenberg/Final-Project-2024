using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.DTO
{
    public class AddressDTO
    {
        public int AddressId { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public int? BuildNumber { get; set; }

        public string PlaceDescription { get; set; }

        public virtual ICollection<DriveDTO> DriveDestinationPointNavigations { get; set; } = new List<DriveDTO>();

        public virtual ICollection<DriveDTO> DriveStartingPointNavigations { get; set; } = new List<DriveDTO>();
    }
}

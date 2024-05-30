using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace BL.DTO
{
    public class DriveDTO
    {
        public int TravelId { get; set; }

        public int StartingPoint { get; set; }

        public int DestinationPoint { get; set; }

        public int? NumberOfPassengers { get; set; }

        public bool OneTimePermanent { get; set; }

        public string CarOwner { get; set; }

        public virtual UserDTO CarOwnerNavigation { get; set; }

        public virtual AddressDTO DestinationPointNavigation { get; set; }

        public virtual AddressDTO StartingPointNavigation { get; set; }
    }
}

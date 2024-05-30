using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Address
{
    public int AddressId { get; set; }

    public string City { get; set; } = null!;

    public string Street { get; set; } = null!;

    public int? BuildNumber { get; set; }

    public string? PlaceDescription { get; set; }

    public virtual ICollection<Drive> DriveDestinationPointNavigations { get; set; } = new List<Drive>();

    public virtual ICollection<Drive> DriveStartingPointNavigations { get; set; } = new List<Drive>();
}

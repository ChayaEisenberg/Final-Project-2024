using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DAL.Models;

public partial class Address
{
    public int AddressId { get; set; }

    public string City { get; set; } = null!;

    public string Street { get; set; } = null!;

    public int? BuildNumber { get; set; }

    public string? PlaceDescription { get; set; }
    [JsonIgnore]
        public virtual ICollection<Drive> DriveDestinationPointNavigations { get; set; } = new List<Drive>();
    [JsonIgnore]
    public virtual ICollection<Drive> DriveStartingPointNavigations { get; set; } = new List<Drive>();
}

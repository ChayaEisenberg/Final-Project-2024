using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DAL.Models;

public partial class User
{
    public string UserName { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public int AddressId { get; set; }

    public string Email { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public string? AboutMe { get; set; }

    public string? Points { get; set; }
    [JsonIgnore]
    public virtual ICollection<Drive> Drives { get; set; } = new List<Drive>();
}

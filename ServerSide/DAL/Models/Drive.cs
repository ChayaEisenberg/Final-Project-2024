using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Drive
{
    public int TravelId { get; set; }

    public int StartingPoint { get; set; }

    public int DestinationPoint { get; set; }

    public int? NumberOfPassengers { get; set; }

    public bool OneTimePermanent { get; set; }

    public string CarOwner { get; set; } = null!;

    public virtual User CarOwnerNavigation { get; set; } = null!;

    public virtual Address DestinationPointNavigation { get; set; } = null!;

    public virtual Address StartingPointNavigation { get; set; } = null!;
}

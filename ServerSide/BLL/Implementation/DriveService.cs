using BL.Api;
using BL.DTO;
using DAL;
using DAL.Api;
using DAL.Implementation;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Implementation
{
    public class DriveService : IDriveService
    {

        DriveRepo driveRepo; 
        public DriveService(DalManeger dalManeger)
        {
            this.driveRepo = dalManeger.driveRepo;
        }
        public Drive AddDrive(Drive drive)
        {
            Drive d = new Drive();
            d.NumberOfPassengers = drive.NumberOfPassengers;
            d.TravelId = drive.TravelId;
            d.OneTimePermanent = drive.OneTimePermanent;
            d.CarOwner = drive.CarOwner;
            d.StartingPoint = drive.StartingPoint;
            d.DestinationPoint = drive.DestinationPoint;
            driveRepo.AddDrive(d);
            return d;
        }

        public bool DeleteDrive(int id)
        {
            return driveRepo.DeleteDrive(id);
        }


        public List<Drive> GetAllDrives()
        {
            return driveRepo.GetAllDrives();
        }

        public Drive UpdateDrive(int id, Drive drive)
        {
            Drive d = new Drive();
            d.NumberOfPassengers = drive.NumberOfPassengers;
            d.TravelId = drive.TravelId;
            d.OneTimePermanent = drive.OneTimePermanent;
            d.CarOwner = drive.CarOwner;
            d.StartingPoint = drive.StartingPoint;
            d.DestinationPoint = drive.DestinationPoint;
            driveRepo.UpdateDrive(id, drive);
            return d;
        }

    
    }
}

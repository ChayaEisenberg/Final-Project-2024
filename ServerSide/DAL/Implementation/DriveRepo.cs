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
    public class DriveRepo : IDriveRepo
    {
        CarsContext context;


        public DriveRepo(CarsContext context)
        {
            this.context = context;
        }

        public Drive AddDrive(Drive drive)
        {
            context.Drives.Add(drive);
            context.SaveChanges();
            return drive;
        }

        public bool DeleteDrive(int id)
        {
            foreach (var drive in context.Drives.ToList())
            {
                if (drive.TravelId == id)
                {
                    context.Drives.Remove(drive);
                    context.SaveChanges();
                    return true;
                }
            }
            return false;
        }


        public List<Drive> GetAllDrives()
        {
            return context.Drives
                .Include(drive => drive.DestinationPointNavigation)
                .Include(d => d.StartingPointNavigation)
                .Include(d => d.CarOwnerNavigation)
                .ToList();
        }




        public User UpdateDrive(string email, User user)
        {
            //foreach (var item in context.Users)
            //{
            //    if (item.Email == email)
            //    {

            //        item.UserName = user.UserName;
            //        item.AboutMe = user.AboutMe;
            //        item.AddressId = user.AddressId;
            //        item.Points = user.Points;
            //        item.Email = email;
            //        item.Drives = user.Drives;
            //        item.FirstName = user.FirstName;
            //        item.LastName = user.LastName;
            //        item.Password = user.Password;

            //    }
            //}
            context.SaveChanges();
            return user;
        }

        public Drive UpdateDrive(int id, Drive drive)
        {
            foreach (var item in context.Drives)
            {
                if (drive.TravelId == id)
                {
                    item.OneTimePermanent = drive.OneTimePermanent;
                    item.CarOwner = drive.CarOwner;
                    item.StartingPoint = drive.StartingPoint;
                    item.DestinationPoint = drive.DestinationPoint;
                    item.NumberOfPassengers = drive.NumberOfPassengers;

                }

            }
            context.SaveChanges();
            return drive;
        }
    }


}

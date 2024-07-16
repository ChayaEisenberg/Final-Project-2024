using Common;
using DAL.Api;
using DAL.Models;
using DataAccessLayer;
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
            var drive = context.Drives.FirstOrDefault(d => d.TravelId == id);
            if (drive != null)
            {
                context.Drives.Remove(drive);
                context.SaveChanges();
                return true;
            }
            return false;
        }


        public PagedList<Drive> GetAllDrives(BaseQueryParams queryParams)
        {
            var queryable = context.Drives.AsQueryable()
                .Include(drive => drive.DestinationPointNavigation)
                .Include(d => d.StartingPointNavigation)
                .Include(d => d.CarOwnerNavigation);
            return PagedList<Drive>            
                .ToPagedList(queryable, queryParams.PageNumber, queryParams.PageSize);


        }

        public PagedList<Drive> GetAllDrives()
        {
            throw new NotImplementedException();
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

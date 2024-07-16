using BL.DTO;
using Common;
using DAL.Models;
using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IDriveService
    {
        PagedList<Drive> GetAllDrives(BaseQueryParams queryParams);
        //Drive GetUserByEmail(string email);
        Drive AddDrive(Drive drive);
        bool DeleteDrive(int id);
        Drive UpdateDrive(int id, Drive drive);

    }
}

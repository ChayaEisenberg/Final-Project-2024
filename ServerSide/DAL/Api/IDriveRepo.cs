using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Api
{
    public interface IDriveRepo
    {
        List<Drive> GetAllDrives();
        //Drive GetUserByEmail(string email);
        Drive AddDrive(Drive drive);
        bool DeleteDrive(int id);
        Drive UpdateDrive(int id, Drive drive);

    }
}
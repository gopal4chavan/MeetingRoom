using System.Collections.Generic;
using System.Linq;
using DomainLayer;
using DataLayer;

namespace Repo
{
    public class RoomRepo
    {
        private AngularPOCEntities _db;

        public IEnumerable<RoomTbl> GetRoomsByLocationID(int LocationID)
        {
            using (_db = new AngularPOCEntities())
            {
                return _db.TblRooms.Where(m=>m.LocationID==LocationID).Select(m => new RoomTbl()
                {
                    RoomID=m.RoomID,
                    RoomName=m.RoomName,
                    LocationID=m.LocationID

                }).ToList();
            }
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using DomainLayer;
using DataLayer;

namespace Repo
{
    public class RoomRepo
    {
        private AngularPOCEntities db;

        public IEnumerable<RoomTbl> GetRoomsByLocationID(int LocationID)
        {
            using (db = new AngularPOCEntities())
            {
                return db.tblRooms.Where(m=>m.location_id==LocationID).Select(m => new RoomTbl()
                {
                    roomID=m.roomID,
                    roomName=m.roomName,
                    location_id=m.location_id

                }).ToList();
            }
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using DomainLayer;
using DataLayer;


namespace Repo
{
    public class SlotRepo
    {
        private AngularPOCEntities _db;

        public IEnumerable<SlotTbl> GetAllSlots()
        {
            using (_db = new AngularPOCEntities())
            {
                return _db.TblSlots.Select(m => new SlotTbl()
                {
                    SlotID = m.SlotID,
                    Slot = m.Slot
                }).ToList();
            }
        }
    }
}

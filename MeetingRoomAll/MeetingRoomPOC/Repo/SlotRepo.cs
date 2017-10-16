using System.Collections.Generic;
using System.Linq;
using DomainLayer;
using DataLayer;


namespace Repo
{
    public class SlotRepo
    {
        private AngularPOCEntities db;

        public IEnumerable<SlotTbl> GetAllSlots()
        {
            using (db = new AngularPOCEntities())
            {
                return db.tblSlots.Select(m => new SlotTbl()
                {
                    slotID = m.slotID,
                    slot = m.slot
                }).ToList();
            }
        }
    }
}

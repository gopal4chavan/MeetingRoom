using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer
{
    public class BookingTbl
    {
        public int createdBy { get; set; }
        public int location_id { get; set; }
        public int room_id { get; set; }
        public string subject { get; set; }
        public string description { get; set; }
        public DateTime fromDate { get; set; }
        public DateTime toDate { get; set; }
        public int slot_id { get; set; }

        public int slot_count { get; set; }
    }
}

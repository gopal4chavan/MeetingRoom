using System;

namespace DomainLayer
{
    public class BookingTbl
    {
        
        public int      CreatedBy   { get; set; }
        public int      LocationID  { get; set; }
        public int      RoomID      { get; set; }
        public string   Subject     { get; set; }
        public string   Description { get; set; }
        public DateTime FromDate    { get; set; }
        public DateTime ToDate      { get; set; }
        public int      SlotID      { get; set; }    
        public int      SlotCount   { get; set; }
        public bool SUN { get; set; }
        public bool MON { get; set; }
        public bool TUE { get; set; }
        public bool WED { get; set; }
        public bool THU { get; set; }
        public bool FRI { get; set; }
        public bool SAT { get; set; }
    }
}
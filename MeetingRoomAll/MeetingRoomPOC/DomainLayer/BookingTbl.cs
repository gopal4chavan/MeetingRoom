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
    }
}
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataLayer
{
    using System;
    
    public partial class SP_GetUserBookings_Result
    {
        public int bookingID { get; set; }
        public int createdBy { get; set; }
        public string subject { get; set; }
        public System.DateTime timestamp { get; set; }
        public string description { get; set; }
        public int locationid { get; set; }
        public int roomid { get; set; }
        public int slotid { get; set; }
        public int slotcount { get; set; }
        public System.DateTime date { get; set; }
        public string status { get; set; }
        public Nullable<System.DateTime> StatusUpdated { get; set; }
    }
}

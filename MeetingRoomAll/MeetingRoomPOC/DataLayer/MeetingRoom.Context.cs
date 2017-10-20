﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class AngularPOCEntities : DbContext
    {
        public AngularPOCEntities()
            : base("name=AngularPOCEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<TblBooking> TblBookings { get; set; }
        public virtual DbSet<TblBookingDate> TblBookingDates { get; set; }
        public virtual DbSet<TblLocation> TblLocations { get; set; }
        public virtual DbSet<TblRoom> TblRooms { get; set; }
        public virtual DbSet<TblSlot> TblSlots { get; set; }
    
        public virtual int SP_Booking(Nullable<int> createdBy, Nullable<int> locationID, Nullable<int> roomID, string subject, string description, Nullable<System.DateTime> fromDate, Nullable<System.DateTime> toDate, Nullable<int> slotID, Nullable<int> slotCount)
        {
            var createdByParameter = createdBy.HasValue ?
                new ObjectParameter("CreatedBy", createdBy) :
                new ObjectParameter("CreatedBy", typeof(int));
    
            var locationIDParameter = locationID.HasValue ?
                new ObjectParameter("LocationID", locationID) :
                new ObjectParameter("LocationID", typeof(int));
    
            var roomIDParameter = roomID.HasValue ?
                new ObjectParameter("RoomID", roomID) :
                new ObjectParameter("RoomID", typeof(int));
    
            var subjectParameter = subject != null ?
                new ObjectParameter("Subject", subject) :
                new ObjectParameter("Subject", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var fromDateParameter = fromDate.HasValue ?
                new ObjectParameter("FromDate", fromDate) :
                new ObjectParameter("FromDate", typeof(System.DateTime));
    
            var toDateParameter = toDate.HasValue ?
                new ObjectParameter("ToDate", toDate) :
                new ObjectParameter("ToDate", typeof(System.DateTime));
    
            var slotIDParameter = slotID.HasValue ?
                new ObjectParameter("SlotID", slotID) :
                new ObjectParameter("SlotID", typeof(int));
    
            var slotCountParameter = slotCount.HasValue ?
                new ObjectParameter("SlotCount", slotCount) :
                new ObjectParameter("SlotCount", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_Booking", createdByParameter, locationIDParameter, roomIDParameter, subjectParameter, descriptionParameter, fromDateParameter, toDateParameter, slotIDParameter, slotCountParameter);
        }
    
        public virtual int SP_RepeatBooking(Nullable<int> createdBy, Nullable<int> locationID, Nullable<int> roomID, string subject, string description, Nullable<bool> mON, Nullable<bool> tUE, Nullable<bool> wED, Nullable<bool> tHU, Nullable<bool> fRI, Nullable<bool> sAT, Nullable<bool> sUN, Nullable<System.DateTime> startOn, Nullable<System.DateTime> endOn, Nullable<int> slotID, Nullable<int> slotCount)
        {
            var createdByParameter = createdBy.HasValue ?
                new ObjectParameter("CreatedBy", createdBy) :
                new ObjectParameter("CreatedBy", typeof(int));
    
            var locationIDParameter = locationID.HasValue ?
                new ObjectParameter("LocationID", locationID) :
                new ObjectParameter("LocationID", typeof(int));
    
            var roomIDParameter = roomID.HasValue ?
                new ObjectParameter("RoomID", roomID) :
                new ObjectParameter("RoomID", typeof(int));
    
            var subjectParameter = subject != null ?
                new ObjectParameter("Subject", subject) :
                new ObjectParameter("Subject", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var mONParameter = mON.HasValue ?
                new ObjectParameter("MON", mON) :
                new ObjectParameter("MON", typeof(bool));
    
            var tUEParameter = tUE.HasValue ?
                new ObjectParameter("TUE", tUE) :
                new ObjectParameter("TUE", typeof(bool));
    
            var wEDParameter = wED.HasValue ?
                new ObjectParameter("WED", wED) :
                new ObjectParameter("WED", typeof(bool));
    
            var tHUParameter = tHU.HasValue ?
                new ObjectParameter("THU", tHU) :
                new ObjectParameter("THU", typeof(bool));
    
            var fRIParameter = fRI.HasValue ?
                new ObjectParameter("FRI", fRI) :
                new ObjectParameter("FRI", typeof(bool));
    
            var sATParameter = sAT.HasValue ?
                new ObjectParameter("SAT", sAT) :
                new ObjectParameter("SAT", typeof(bool));
    
            var sUNParameter = sUN.HasValue ?
                new ObjectParameter("SUN", sUN) :
                new ObjectParameter("SUN", typeof(bool));
    
            var startOnParameter = startOn.HasValue ?
                new ObjectParameter("StartOn", startOn) :
                new ObjectParameter("StartOn", typeof(System.DateTime));
    
            var endOnParameter = endOn.HasValue ?
                new ObjectParameter("EndOn", endOn) :
                new ObjectParameter("EndOn", typeof(System.DateTime));
    
            var slotIDParameter = slotID.HasValue ?
                new ObjectParameter("SlotID", slotID) :
                new ObjectParameter("SlotID", typeof(int));
    
            var slotCountParameter = slotCount.HasValue ?
                new ObjectParameter("SlotCount", slotCount) :
                new ObjectParameter("SlotCount", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_RepeatBooking", createdByParameter, locationIDParameter, roomIDParameter, subjectParameter, descriptionParameter, mONParameter, tUEParameter, wEDParameter, tHUParameter, fRIParameter, sATParameter, sUNParameter, startOnParameter, endOnParameter, slotIDParameter, slotCountParameter);
        }
    
        public virtual int SP_UpdateBooking(Nullable<int> bookingID, Nullable<int> createdBy, Nullable<int> locationID, Nullable<int> roomID, string subject, string description, Nullable<System.DateTime> fromDate, Nullable<System.DateTime> toDate, Nullable<int> slotID, Nullable<int> slotCount, Nullable<bool> editSlots)
        {
            var bookingIDParameter = bookingID.HasValue ?
                new ObjectParameter("BookingID", bookingID) :
                new ObjectParameter("BookingID", typeof(int));
    
            var createdByParameter = createdBy.HasValue ?
                new ObjectParameter("CreatedBy", createdBy) :
                new ObjectParameter("CreatedBy", typeof(int));
    
            var locationIDParameter = locationID.HasValue ?
                new ObjectParameter("LocationID", locationID) :
                new ObjectParameter("LocationID", typeof(int));
    
            var roomIDParameter = roomID.HasValue ?
                new ObjectParameter("RoomID", roomID) :
                new ObjectParameter("RoomID", typeof(int));
    
            var subjectParameter = subject != null ?
                new ObjectParameter("Subject", subject) :
                new ObjectParameter("Subject", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var fromDateParameter = fromDate.HasValue ?
                new ObjectParameter("FromDate", fromDate) :
                new ObjectParameter("FromDate", typeof(System.DateTime));
    
            var toDateParameter = toDate.HasValue ?
                new ObjectParameter("ToDate", toDate) :
                new ObjectParameter("ToDate", typeof(System.DateTime));
    
            var slotIDParameter = slotID.HasValue ?
                new ObjectParameter("SlotID", slotID) :
                new ObjectParameter("SlotID", typeof(int));
    
            var slotCountParameter = slotCount.HasValue ?
                new ObjectParameter("SlotCount", slotCount) :
                new ObjectParameter("SlotCount", typeof(int));
    
            var editSlotsParameter = editSlots.HasValue ?
                new ObjectParameter("EditSlots", editSlots) :
                new ObjectParameter("EditSlots", typeof(bool));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UpdateBooking", bookingIDParameter, createdByParameter, locationIDParameter, roomIDParameter, subjectParameter, descriptionParameter, fromDateParameter, toDateParameter, slotIDParameter, slotCountParameter, editSlotsParameter);
        }
    }
}

using DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainLayer;
using System.Collections;

namespace Repo
{
    public class BookingRepo
    {
        private AngularPOCEntities db;

        public string AddBooking(BookingTbl details)
        {
            try
            {

                using (db = new AngularPOCEntities())
                {
                    db.booking_proc(
                        details.createdBy,
                        details.location_id,
                        details.room_id,
                        details.subject,
                        details.description,
                        details.fromDate,
                        details.toDate,
                        details.slot_id,
                        details.slot_count
                    );
                    db.SaveChanges();
                    return "success";
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public IEnumerable<object> GetBookingSlots(int locid, int roomid)
        {
            try
            {

                using (db = new AngularPOCEntities())
                {

                    return db.tblBookings.Where(result => result.location_id == locid && result.room_id == roomid)
                        .Select(res => new
                        {
                            bookingID = res.bookingID,
                            createdBy = res.createdBy,
                            timeStamp = res.timestamp,
                            subject = res.subject,
                            description = res.description,
                            bookedSlots = db.tbl_Booking_Date.Where(resp => res.bookingID == resp.bookingID).Select(r => new { bookingID=r.bookingID, slotID = r.slotID, date = r.date }).ToList()
                        }).ToList();
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        //public string DeleteSlot(int bookingID,int slotID,DateTime date)
        //{
        //    try
        //    {
        //        using (db = new AngularPOCEntities())
        //        {
        //            db.tbl_Booking_Date.RemoveRange(db.tbl_Booking_Date.Where(result => result.bookingID == bookingID && result.slotID==slotID && result.date==date));
        //            int count = db.tbl_Booking_Date.Where(result => result.bookingID == bookingID).Count();
        //            if (count==0)
        //            {
        //                db.tblBookings.RemoveRange(db.tblBookings.Where(res => res.bookingID == bookingID));
        //            }                    
        //            db.SaveChanges();
        //            return "success";
        //        }
        //    }
        //    catch(Exception e)
        //    {
        //        throw;
        //    }
        //}
        public string DeleteDay(int bookingID,DateTime date)
        {
            try
            {
                using (db = new AngularPOCEntities())
                {
                    db.tbl_Booking_Date.RemoveRange(db.tbl_Booking_Date.Where(result => result.bookingID == bookingID && result.date == date));
                    int count = db.tbl_Booking_Date.Where(result => result.bookingID == bookingID).Count();
                    if (count == 0)
                    {
                        db.tblBookings.Remove(db.tblBookings.SingleOrDefault(res => res.bookingID == bookingID));
                    }
                    db.SaveChanges();
                    return "success";
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public string DeleteEntireBooking(int bookingID)
        {
            try
            {
                using (db = new AngularPOCEntities())
                {
                    db.tbl_Booking_Date.RemoveRange(db.tbl_Booking_Date.Where(result => result.bookingID == bookingID));
                    db.tblBookings.Remove(db.tblBookings.SingleOrDefault(res => res.bookingID == bookingID));
                    db.SaveChanges();
                    return "success";
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public string UpdateBooking(int bookingID,BookingTbl details)
        {
            try
            {

                using (db = new AngularPOCEntities())
                {
                    db.update_booking_proc(
                        bookingID,
                        details.createdBy,
                        details.location_id,
                        details.room_id,
                        details.subject,
                        details.description,
                        details.fromDate,
                        details.toDate,
                        details.slot_id,
                        details.slot_count
                    );
                    db.SaveChanges();
                    return "success";
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public object GetDetails(int bookingID)
        {
            try
            {

                using (db = new AngularPOCEntities())
                {

                    return db.tblBookings.Where(result => result.bookingID == bookingID)
                        .Select(res => new
                        {
                            bookingID = res.bookingID,
                            createdBy = res.createdBy,
                            subject = res.subject,
                            description = res.description,
                            fromDate = res.fromDate,
                            toDate = res.toDate,
                            location_id = res.location_id,
                            room_id = res.room_id,
                            location_name = db.tblLocations.FirstOrDefault(elem => elem.locationID == res.location_id).locationName,
                            room_name = db.tblRooms.FirstOrDefault(elem => elem.roomID == res.room_id).roomName,
                            slot_count = db.tbl_Booking_Date.Where(elem => elem.bookingID == res.bookingID).Select(m => m.slotID).Distinct().Count()

                        }).FirstOrDefault();
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

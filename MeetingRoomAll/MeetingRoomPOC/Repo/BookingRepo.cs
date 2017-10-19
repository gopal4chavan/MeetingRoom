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
        private AngularPOCEntities _db;

        public string AddBooking(BookingTbl details)
        {
            try
            {

                using (_db = new AngularPOCEntities())
                {
                    _db.SP_Booking(
                        details.CreatedBy,
                        details.LocationID,
                        details.RoomID,
                        details.Subject,
                        details.Description,
                        details.FromDate,
                        details.ToDate,
                        details.SlotID,
                        details.SlotCount
                    );
                    _db.SaveChanges();
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

                using (_db = new AngularPOCEntities())
                {

                    return _db.TblBookings.Where(result => result.LocationID == locid && result.RoomID == roomid)
                        .Select(res => new
                        {
                            BookingID = res.BookingID,
                            CreatedBy = res.CreatedBy,
                            TimeStamp = res.TimeStamp,
                            Subject = res.Subject,
                            Description = res.Description,
                            BookedSlots = _db.TblBookingDates.Where(resp => res.BookingID == resp.BookingID).Select(r => new { BookingID=r.BookingID, slotID = r.SlotID, date = r.Date }).ToList()
                        }).ToList();
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public string DeleteDay(int BookingID,DateTime date)
        {
            try
            {
                using (_db = new AngularPOCEntities())
                {
                    _db.TblBookingDates.RemoveRange(_db.TblBookingDates.Where(result => result.BookingID == BookingID && result.Date == date));
                    int count = _db.TblBookingDates.Where(result => result.BookingID == BookingID).Count();
                    if (count == 0)
                    {
                        _db.TblBookings.Remove(_db.TblBookings.SingleOrDefault(res => res.BookingID == BookingID));
                    }
                    _db.SaveChanges();
                    return "success";
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public string DeleteEntireBooking(int BookingID)
        {
            try
            {
                using (_db = new AngularPOCEntities())
                {
                    _db.TblBookingDates.RemoveRange(_db.TblBookingDates.Where(result => result.BookingID == BookingID));
                    _db.TblBookings.Remove(_db.TblBookings.SingleOrDefault(res => res.BookingID == BookingID));
                    _db.SaveChanges();
                    return "success";
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public string UpdateBooking(int BookingID,BookingTbl details,bool bulkEdit)
        {
            try
            {

                using (_db = new AngularPOCEntities())
                {
                    _db.SP_UpdateBooking(
                        BookingID,
                        details.CreatedBy,
                        details.LocationID,
                        details.RoomID,
                        details.Subject,
                        details.Description,
                        details.FromDate,
                        details.ToDate,
                        details.SlotID,
                        details.SlotCount,
                        bulkEdit
                    );
                    _db.SaveChanges();
                    return "success";
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public object GetDetails(int BookingID)
        {
            try
            {

                using (_db = new AngularPOCEntities())
                {

                    return _db.TblBookings.Where(result => result.BookingID == BookingID)
                        .Select(res => new
                        {
                            BookingID = res.BookingID,
                            CreatedBy = res.CreatedBy,
                            Subject = res.Subject,
                            Description = res.Description,
                            FromDate = res.FromDate,
                            ToDate = res.ToDate,
                            LocationID = res.LocationID,
                            RoomID = res.RoomID,
                            LocationName = _db.TblLocations.FirstOrDefault(elem => elem.LocationID == res.LocationID).LocationName,
                            RoomName = _db.TblRooms.FirstOrDefault(elem => elem.RoomID == res.RoomID).RoomName,
                            SlotCount = _db.TblBookingDates.Where(elem => elem.BookingID == res.BookingID).Select(m => m.SlotID).Distinct().Count()

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

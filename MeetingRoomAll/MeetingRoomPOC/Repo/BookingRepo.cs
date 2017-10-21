using DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using DomainLayer;

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
                            BookedSlots = _db.TblBookingDates.Where(resp => res.BookingID == resp.BookingID && resp.Status == "ACTIVE").Select(r => new { BookingID = r.BookingID, CreatedBy = res.CreatedBy, SlotID = r.SlotID, Date = r.Date }).ToList()
                        }).ToList();
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public string DeleteDay(int BookingID, DateTime date)
        {
            try
            {
                using (_db = new AngularPOCEntities())
                {
                    var thisBookingId = _db.TblBookingDates.Where(result => result.BookingID == BookingID && result.Date == date).ToList();

                    thisBookingId.ForEach(el => el.Status = "CANCEL");
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
                    var thisBookingId = _db.TblBookingDates.Where(result => result.BookingID == BookingID).ToList();
                    thisBookingId.ForEach(el => el.Status = "CANCEL");
                    _db.SaveChanges();
                    return "success";

                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public string UpdateBooking(int BookingID, BookingTbl details, bool bulkEdit = true)
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
                            SlotID = res.SlotID,
                            SlotCount = res.SlotCount,
                            Slot = _db.TblSlots.FirstOrDefault(elem => elem.SlotID == res.SlotID).Slot,
                            TimeStamp = res.TimeStamp

                        }).FirstOrDefault();
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public string AddRepeatBooking(BookingTbl details)
        {
            try
            {
                string WeekDays = (details.SUN ? "1" : "0") + (details.MON ? "1" : "0") + (details.TUE ? "1" : "0") + (details.WED ? "1" : "0") + (details.THU ? "1" : "0") + (details.FRI ? "1" : "0") + (details.SAT ? "1" : "0");
                using (_db = new AngularPOCEntities())
                {
                    _db.SP_RepeatBooking(
                        details.CreatedBy,
                        details.LocationID,
                        details.RoomID,
                        details.Subject,
                        details.Description,
                        details.SUN,
                        details.MON,
                        details.TUE,
                        details.WED,
                        details.THU,
                        details.FRI,
                        details.SAT,
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
    }
}

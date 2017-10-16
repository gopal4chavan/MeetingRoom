using DomainLayer;
using Repo;
using System;

using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MeetingRoomPOC.Controllers
{
    [RoutePrefix("api/booking")]
    public class BookingController : BaseController
    {
        private BookingRepo _repoObj;
        public BookingController()
        {
            _repoObj = new Repo.BookingRepo();

        }
        [HttpPost]
        public HttpResponseMessage AddBooking([FromBody]BookingTbl details)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.AddBooking(details));
            }
            catch (Exception ex)
            {
                return SetErrorResponse(ex.Message);
            }
        }

        [HttpGet]
        public HttpResponseMessage GetBookedSlots(int locationid,int roomid)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.GetBookingSlots(locationid, roomid));
            }
            catch(Exception e)
            {
                return SetErrorResponse(e.Message);
            }
        }
        //[HttpPost]
        //[Route("deleteslot")]
        //public HttpResponseMessage DeleteSlot(int bookingID, int slotID, DateTime date)
        //{
        //    try
        //    {
        //        return Request.CreateResponse(HttpStatusCode.OK, _repoObj.DeleteSlot(bookingID, slotID, date));
        //    }
        //    catch(Exception e)
        //    {
        //        throw;
        //    }
        //}
        [HttpPost]
        [Route("deleteday")]
        public HttpResponseMessage DeleteDay(int bookingID, DateTime date)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.DeleteDay(bookingID, date));
            }
            catch (Exception e)
            {
                throw;
            }
        }
        [HttpPost]
        [Route("delete")]
        public HttpResponseMessage DeleteEntireBooking(int bookingID)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.DeleteEntireBooking(bookingID));
            }
            catch (Exception e)
            {
                throw;
            }
        }

        [HttpPost]
        [Route("update")]
        public HttpResponseMessage UpdateBooking(int bookingID,[FromBody]BookingTbl details)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.UpdateBooking(bookingID,details));
            }
            catch (Exception e)
            {
                throw;
            }
        }
        [HttpPost]
        [Route("getdetails")]
        public HttpResponseMessage GetDetails(int bookingID)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.GetDetails(bookingID));
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

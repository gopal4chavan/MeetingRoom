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
        public HttpResponseMessage UpdateBooking(int bookingID, [FromBody]BookingTbl details, bool bulkEdit=true)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.UpdateBooking(bookingID, details, bulkEdit));
            }
            catch (Exception e)
            {
                throw;
            }
        }
        [HttpGet]
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


        [HttpGet]
        [Route("getuserbookingdetails")]
        public HttpResponseMessage GetUserBookingsDetails( int id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.GetUserBookings(id));
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}

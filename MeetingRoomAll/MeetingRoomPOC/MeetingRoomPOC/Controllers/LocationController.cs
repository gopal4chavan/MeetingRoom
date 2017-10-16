using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repo;

namespace MeetingRoomPOC.Controllers
{
    public class LocationController : BaseController
    {
        private LocationRepo _repoObj;
        public LocationController()
        {
            _repoObj = new Repo.LocationRepo();
        }
        //Get All locations
        [HttpGet]
        public HttpResponseMessage GetAllLocations()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.GetAllLocations());

            }
            catch (Exception ex)
            {
                return SetErrorResponse(ex.Message);
            }
        }
    }
}

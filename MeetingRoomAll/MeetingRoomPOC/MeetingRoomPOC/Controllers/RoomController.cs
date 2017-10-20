using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repo;

namespace MeetingRoomPOC.Controllers
{
    public class RoomController : BaseController
    {
        private RoomRepo _repoObj;
        public RoomController()
        {
            _repoObj = new Repo.RoomRepo();
        }

        [HttpGet]
        public HttpResponseMessage GetRoomsByLocationID([FromUri] int locationID)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.GetRoomsByLocationID((int)locationID ));
            }
            catch (Exception ex)
            {
                return SetErrorResponse(ex.Message);
            }
        }
    }
}

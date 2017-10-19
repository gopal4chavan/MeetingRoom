using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Repo;

namespace MeetingRoomPOC.Controllers
{
    public class SlotController : BaseController
    {
        private SlotRepo _repoObj;
        public SlotController()
        {
            _repoObj = new Repo.SlotRepo();
        }

        [HttpGet]
        public HttpResponseMessage GetAllSlots()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, _repoObj.GetAllSlots());
            }
            catch (Exception ex)
            {
                return SetErrorResponse(ex.Message);
            }
        }
    }
}

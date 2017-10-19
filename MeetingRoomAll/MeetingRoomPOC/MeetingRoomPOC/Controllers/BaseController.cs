using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MeetingRoomPOC.Controllers
{
    public class BaseController : ApiController
    {
        public HttpResponseMessage SetErrorResponse(string message)
        {
            return Request.CreateResponse(HttpStatusCode.InternalServerError, message);
        }
    }
}

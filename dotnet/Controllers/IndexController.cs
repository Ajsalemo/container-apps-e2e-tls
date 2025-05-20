using Microsoft.AspNetCore.Mvc;

namespace dotnet.Controllers
{
    [ApiController]
    [Route("/")]
    public class IndexController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var msg = new
            {
                message = "container-apps-e2e-tls-dotnet"
            };

            return Ok(msg);
        }
    }
}

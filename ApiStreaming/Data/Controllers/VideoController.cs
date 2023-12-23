using Microsoft.AspNetCore.Mvc;

namespace Data.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly IWebHostEnvironment webHostEnvironment;

        public VideoController(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var root = @webHostEnvironment.WebRootPath + "/Videos/new.mp4"; //VideoUrl

            if (!System.IO.File.Exists(root))
            {

                return NotFound();
            }
            return new FileStreamResult(new FileStream(root, FileMode.Open), "video/mp4");
        }



    }
}














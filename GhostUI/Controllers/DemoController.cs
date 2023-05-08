using System;
using System.Linq;
using GhostUI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace GhostUI.Controllers
{
    public class DotNetUserGroup
    {
        public string GroupName { get; set; }
        public string GroupAdmin { get; set; }
        public string EventName { get; set;}
        public DateTime EventDate { get; set; }
    }

    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DemoController : ControllerBase
    {
        [HttpGet]
        public ActionResult<DotNetUserGroup> GetUserGroup()
        {
            var ug = new DotNetUserGroup()
            {
                GroupName = "Pittsburg .NET UG",
                GroupAdmin = "Balaji",
                EventName = "Let's dance .NET and react",
                EventDate = DateTime.Now,
            };
            return Ok(ug);
        }
    }
}
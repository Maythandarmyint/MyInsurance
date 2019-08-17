using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Insurance.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public JsonResult CalculatePremium(int occupation, int age, int deathcoveramount)
        {
            string amount = "";

            amount = ((deathcoveramount * 1.5 * age) / 1000 * 12).ToString();

            return Json(amount, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetOccupationList()
        {
            var list = new[] {
                    new {ID = "1" , Text = "Cleaner"},
                    new {ID = "2" , Text = "Doctor"},
                    new {ID = "3" , Text = "Author"}
                };
            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}
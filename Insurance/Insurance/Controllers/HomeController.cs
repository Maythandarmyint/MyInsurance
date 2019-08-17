using Insurance.Services;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Insurance.Controllers
{
    public class HomeController : Controller
    {
        private IPremiumService premiumService;

        public HomeController(IPremiumService premiumService)
        {
            this.premiumService = premiumService;
        }

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult CalculatePremium(int occupation, int age, int deathcoveramount)
        {
            string amount = "";
            try
            {
                amount = premiumService.CalculatePremium(occupation, age, deathcoveramount).ToString("c");
            }
            catch(Exception e)
            {
                Debug.WriteLine(e.Message + "\n" + e.StackTrace);
            }
            return Json(amount, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetOccupationList()
        {
            var oup = premiumService.GetOccupations().Select(x => new { ID = x.ID, Text = x.OccupationType });
            return Json(oup, JsonRequestBehavior.AllowGet);
        }
    }
}
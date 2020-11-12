using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CotizacionWeb.Models;
using Microsoft.AspNetCore.Mvc;

namespace CotizacionWeb.Controllers
{
    [Route("api/[Controller]")]
    public class PersonaController : Controller
    {
        private Models.DBContext db;
        public PersonaController(Models.DBContext context)
        {
            db = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<Personas> GetAll()
        {
           
            List<Personas> list = new List<Personas>();

            try
            {
                list = db.Personas.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);

            }

            return list;
        }

        public IEnumerable<Personas> Test()
        {
            List<Personas> lst = (from d in db.Personas
                                  select new Personas
                                  {
                                      IDPERSONA = d.IDPERSONA,
                                      NOMBREPERSONA = "ggggggggggg",
                                      DOCUMENTOPERSONA = d.DOCUMENTOPERSONA,
                                      TELEFONOPERSONA = d.TELEFONOPERSONA
                                  }).ToList();


            return lst;
        }


    }
}

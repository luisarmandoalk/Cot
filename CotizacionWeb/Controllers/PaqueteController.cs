using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CotizacionWeb.Models;
using Microsoft.Data.SqlClient;
using System.Data;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using Nancy.Json;

namespace CotizacionWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaqueteController : ControllerBase
    {

        private Models.DBContext db;
        public PaqueteController(Models.DBContext context)
        {
            db = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<Paquete> GetAll()
        {

            List<Paquete> list = new List<Paquete>();

            try
            {
                list = db.Paquete.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);

            }

            return list;
        }

        [HttpPost("[action]")]
        private void insert(int id, string name)
        {
           
            Paquete paquete = new Paquete
            {
               ID_PAQUETE = id,
               NOMBRE_PAQUETE = name
            };

            db.Paquete.Add(paquete);

            try
            {
                db.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
               
                db.SaveChanges();
            }

        }

        [HttpPost("[action]")]
        public void update(int id, string name)
        {
            Paquete paquete = db.Paquete.Find(id);

            {
                paquete.NOMBRE_PAQUETE = name;
            };
           

            db.Paquete.Update(paquete);

            try
            {
                db.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);

                db.SaveChanges();
            }
        }

       

        [HttpDelete("[action]")]
        public void delete(int id)
        {
           
            Paquete paquete = db.Paquete.Find(id);           

            db.Paquete.Remove(paquete);

            try
            {
                db.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);

                db.SaveChanges();
            }
        }
    }
}
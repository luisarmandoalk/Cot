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

namespace CotizacionWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CotizacionController : ControllerBase
    {

        private Models.DBContext db;
        public CotizacionController(Models.DBContext context)
        {
            db = context;
        }

        //[HttpGet("[action]")]
        //public IEnumerable<Cotizaciones> GetAll()
        //{
        //    //List<Cotizaciones> lst = (from d in db.Cotizaciones
        //    //                          select new Cotizaciones
        //    //                          {
        //    //                              IDCOTIZACION = d.IDCOTIZACION,
        //    //                              RUC = d.RUC,
        //    //                              IDCLIENTE = d.IDCLIENTE,
        //    //                              IDVENDEDOR = d.IDVENDEDOR
        //    //                          }).ToList();

        //    List<Cotizaciones> lstCotizaciones = new List<Cotizaciones>();
        //    lstCotizaciones = db.Cotizaciones
        //        .FromSqlRaw("EXEC	[dbo].[GetAllCotizaciones]")
        //        .ToList();       

        //    return lstCotizaciones;
        //}

        [HttpGet("[action]")]
        public IEnumerable<Cotizaciones> GetAll()
        {

            List<Cotizaciones> list = new List<Cotizaciones>();

            try
            {
                list = db.Cotizaciones.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);

            }

            return list;
        }

        [HttpPost("[action]")]
        private void AddNew(int idc, int idco, int idv, string ruc)
        {

            Cotizaciones coti = new Cotizaciones
            {
                IDCLIENTE = idc ,
                 IDCOTIZACION = idco,
                  IDVENDEDOR = idv,
                   RUC = ruc
                    
            };

            db.Cotizaciones.Add(coti);

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
        public void Update(int id, int idc, int idco, int idv, string ruc)
        {
            Cotizaciones cotiza = db.Cotizaciones.Find(id);

            {
                cotiza.IDCLIENTE = idc;
                cotiza.IDCOTIZACION = idco;
                cotiza.IDVENDEDOR = idv;
                cotiza.RUC = ruc;

            };


            db.Cotizaciones.Update(cotiza);

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
        public void Delete(int id)
        {

            Cotizaciones cotiza = db.Cotizaciones.Find(id);

            db.Cotizaciones.Remove(cotiza);

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
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
    public class ProductoController : ControllerBase
    {

        private Models.DBContext db;
        public ProductoController(Models.DBContext context)
        {
            db = context;
        }





        [HttpGet("[action]")]
        public IEnumerable<Productos> getall()
        {

            List<Productos> list = new List<Productos>();

            try
            {
                list = db.Productos.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);

            }

            return list;
        }

        [HttpPost("[action]")]

        private void insert( string name, string desc, double precio, int stock, int tipo)
        {

            Productos producto = new Productos()
            {
                NOMBREPRODUCTO = name,
                 DESCRIPCIONPRODUCTO = desc ,
                  PRECIOPRODUCTO = precio,
                   STOCK = stock ,
                    ID_TIPO = tipo
            };

            db.Productos.Add(producto);

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
        public void update(int id,string name, string desc, double precio, int st, int tipo)
        {
            Productos producto = db.Productos.Find(id);
           
            {
                producto.NOMBREPRODUCTO = name;
                producto.DESCRIPCIONPRODUCTO = desc;
                producto.PRECIOPRODUCTO = precio;
                producto.STOCK = st;
                producto.ID_TIPO = tipo;
            };

            db.Productos.Update(producto);

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

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CotizacionWeb.Models
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }

        public DbSet<Personas> Personas { get; set; }
        public DbSet<Cotizaciones> Cotizaciones { get; set; }

        public DbSet<Details> Details { get; set; }

        public DbSet<Productos> Productos { get; set; }
        public DbSet<Paquete> Paquete { get; set; }
        public DbSet<ProductoPaquete> ProductoPaquete { get; set; }


    }

        public class Personas
        {
           [Key] public int IDPERSONA { get; set; }
            public string NOMBREPERSONA { get; set; }
            public string DOCUMENTOPERSONA { get; set; }           
            public string TELEFONOPERSONA { get; set; }

        }

    public class Cotizaciones
    {        
        [Key] public int IDCOTIZACION { get; set; }
        public string RUC { get; set; }       
        public int IDCLIENTE { get; set; }
        public int IDVENDEDOR { get; set; }

        public double TOTAL { get; set; }

    }





    public class Details
    {
        [Key] public int IDCOTIZACION { get; set; }
        public string RUC { get; set; }
        public int IDVENDEDOR { get; set; }
        public string NombreVend { get; set; }
        public int IDCLIENTE { get; set; }
        public string NombreCli { get; set; }
        public int IDPRODUCTO { get; set; }
        public string NOMBREPRODUCTO { get; set; }
        public double PRECIOPRODUCTO { get; set; }
        public int CANTIDADxPRODUCTOxDETALLE { get; set; }      
        public double TOTAL { get; set; }

    }



    public class Productos
    {
        
        [Key] public int IDPRODUCTO { get; set; }
        public string NOMBREPRODUCTO { get; set; }

        public string DESCRIPCIONPRODUCTO { get; set; }
        public double PRECIOPRODUCTO { get; set; }
        public int STOCK { get; set; }

        public int ID_TIPO { get; set; }

    }

    public class Paquete
    {        
        [Key] public int ID_PAQUETE { get; set; }
        public string NOMBRE_PAQUETE { get; set; }
    }

    public class ProductoPaquete
    {
        [Key] public int ID_PRODUCTO { get; set; }
        [Key] public int ID_PAQUETE { get; set; }
        public int CANTIDAD_PRODUCTO_PAQUETE { get; set; }
        
    }

    



}

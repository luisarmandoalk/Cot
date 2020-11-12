using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CotizacionWeb.Models
{
    public class PersonaViewModel
    {

       [Key] public int ID_PERSONA { get; set; }
        public string DOCUMENTO { get; set; }
        public int NOMBRE_PERSONA { get; set; }
        public int TELEFONO_PERSONA { get; set; }
    }
}

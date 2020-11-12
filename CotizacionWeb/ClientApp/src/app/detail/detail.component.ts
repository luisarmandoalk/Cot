import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
/** Detail component*/
export class DetailComponent {
    /** Detail ctor */
    public listdetail: Detail[];
   

   


    constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        http.get<Detail[]>(baseUrl + "api/cotizacion/GetDetalle").subscribe(result => {
            this.listdetail = result;
        })
    }

   


}


interface Detail {
    IDCOTIZACION: number,
    RUC: string,
    IDVENDEDOR: number,
    NOMBREPERSONAV: string,
    IDCLIENTE: number,
    NOMBREPERSONAC : string ,
    IDPRODUCTO: number;
    NOMBREPRODUCTO: string,
    PRECIOPRODUCTO: number,
    CANTIDADxPRODUCTOxDETALLE: number,
    TOTAL: number;
   
}

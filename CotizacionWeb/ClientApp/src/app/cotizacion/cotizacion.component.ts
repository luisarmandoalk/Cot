import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
    selector: 'app-cotizacion',
    templateUrl: './cotizacion.component.html',
    styleUrls: ['./cotizacion.component.scss']
    
})
/** cotizacion component*/
export class CotizacionComponent {
    /** cotizacion ctor */


    public listcotizacion: Cotizacion[];
    public cotizacion: Cotizacion[];

    constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        http.get<Cotizacion[]>(baseUrl + "api/cotizacion/getall").subscribe(result => {
            this.listcotizacion = result;
        })
    }

    url = Inject("BASE_URL");

    insert(http: HttpClient, ruc: string, idc: Int16Array, idv: Int16Array): Observable<Cotizacion> {
        return http.get<Cotizacion>(this.url + 'api/cotizacion/insert' + "/" + ruc + "/" + idc + "/" + idv);
    }


    update(http: HttpClient, ruc: string, idc: Int16Array, idv: Int16Array): Observable<Cotizacion> {
        return http.get<Cotizacion>(this.url + 'api/cotizacion/update' + "/" + ruc + "/" + idc + "/" + idv);
    }

    delete(http: HttpClient, id: Int16Array): Observable<Cotizacion> {
        return http.get<Cotizacion>(this.url + 'api/producto/delete' + "/" + id);
    }
    getall(http: HttpClient): Observable<Cotizacion> {
        return http.get<Cotizacion>(this.url + 'api/producto/getall');
    }


   
         

    

}



interface Cotizacion {
    IDCOTIZACION: number,	
    RUC	: string,   
    IDCLIENTE: number,
    IDVENDEDOR: number,
    TOTAL: number;


}

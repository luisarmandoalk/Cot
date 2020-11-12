import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss']
})
/** producto component*/
export class ProductoComponent {

    public lstProductos: Producto[];


    constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        http.get<Producto[]>(baseUrl + "api/producto/getall").subscribe(result => {
            this.lstProductos = result;
        })
    }

    url = Inject("BASE_URL");

    insert(http: HttpClient, name: string, desc: string, precio: Int16Array, stock: Int16Array, tipo: Int16Array): Observable<Producto> {
        return http.get<Producto>(this.url + 'api/producto/insert' + "/" + name + "/" + desc + "/" + precio + "/" + stock + "/" + tipo);
    }  
   
    update(http: HttpClient, name: string, desc: string, precio: Int16Array, stock: Int16Array, tipo: Int16Array): Observable<Producto> {
        return http.get<Producto>(this.url + 'api/producto/update' + "/" + name + "/" + desc + "/" + precio + "/" + stock + "/" + tipo);
    }

    delete(http: HttpClient, id: Int16Array): Observable<Producto> {
        return http.get<Producto>(this.url + 'api/producto/delete' + "/" + id );
    }
    getall(http: HttpClient): Observable<Producto> {
        return http.get<Producto>(this.url + 'api/producto/getall' );
    }
    
  

}


interface Producto {
  
    IDPRODUCTO: number,
    NOMBREPRODUCTO: string,
    DESCRIPCIONPRODUCTO: string,
    PRECIOPRODUCTO: number,
    STOCK: number,
    ID_TIPO: number;

}

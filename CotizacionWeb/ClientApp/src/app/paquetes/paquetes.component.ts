import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-paquetes',
    templateUrl: './paquetes.component.html',
    styleUrls: ['./paquetes.component.scss']
})
/** paquetes component*/
export class PaquetesComponent {
/** paquetes ctor */
    public lstProductos: Paquete[];

    constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
        http.get<Paquete[]>(baseUrl + "api/producto/GetAll").subscribe(result => {
            this.lstProductos = result;
        })
    }

    
    
    url = Inject("BASE_URL");
    insert(http: HttpClient, name: string): Observable<Paquete> {
        return http.get<Paquete>(this.url + 'api/paquete/insert' + "/" + name );
    }

    update(http: HttpClient, id: Int16Array, name: string): Observable<Paquete> {
        return http.get<Paquete>(this.url + 'api/paquete/update' + "/" + name );
    }

    delete(http: HttpClient, id: Int16Array): Observable<Paquete> {
        return http.get<Paquete>(this.url + 'api/paquete/delete' + "/" + id);
    }
    getall(http: HttpClient): Observable<Paquete> {
        return http.get<Paquete>(this.url + 'api/paquete/getall');
    }
   


}


interface Paquete {
    
    

    ID_PAQUETE: number,
    NOMBRE_PAQUETE: string;

}


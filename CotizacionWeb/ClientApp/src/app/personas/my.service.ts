import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyService {


    url = 'http://localhost:4200/api/Persona';
    constructor(private http: HttpClient) { }
    getAllEmployee(): Observable<Persona[]> {
        return this.http.get<Persona[]>(this.url + '/getall');
    }
    getEmployeeById(employeeId: string): Observable<Persona> {
        return this.http.get<Persona>(this.url + '/GetEmployeeDetailsById/' + employeeId);
    }
    createEmployee(employee: Persona): Observable<Persona> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<Persona>(this.url + '/InsertEmployeeDetails/',
            employee, httpOptions);
    }
    updateEmployee(employee: Persona): Observable<Persona> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.put<Persona>(this.url + '/UpdateEmployeeDetails/',
            employee, httpOptions);
    }
    deleteEmployeeById(employeeid: string): Observable<number> {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,
            httpOptions);
    }
}

interface Persona {
    IDPERSONA: number,
    NOMBREPERSONA: string,
    DOCUMENTOPERSONA: string,
    TELEFONOPERSONA: string;
}

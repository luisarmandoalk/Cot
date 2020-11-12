import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyService } from '../personas/my.service';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class PersonasComponent implements OnInit {
    dataSaved = false;
    employeeForm: any;
    allEmployees: Observable<Persona[]>;
    employeeIdUpdate = null;
    massage = null;

    constructor(private formbulider: FormBuilder, private employeeService: MyService) { }

    ngOnInit() {
        this.employeeForm = this.formbulider.group({
            EmpName: ['', [Validators.required]],
            DateOfBirth: ['', [Validators.required]],
            EmailId: ['', [Validators.required]],
            Gender: ['', [Validators.required]],
            Address: ['', [Validators.required]],
            PinCode: ['', [Validators.required]],
        });
        this.loadAllEmployees();
    }
    loadAllEmployees() {
        this.allEmployees = this.employeeService.getAllEmployee();
    }
    onFormSubmit() {
        this.dataSaved = false;
        const employee = this.employeeForm.value;
        this.CreateEmployee(employee);
        this.employeeForm.reset();
    }
    loadEmployeeToEdit(employeeId: string) {
        this.employeeService.getEmployeeById(employeeId).subscribe(employee => {
            this.massage = null;
            this.dataSaved = false;
           
        });

    }
    CreateEmployee(employee: Persona) {
        if (this.employeeIdUpdate == null) {
            this.employeeService.createEmployee(employee).subscribe(
                () => {
                    this.dataSaved = true;
                    this.massage = 'Record saved Successfully';
                    this.loadAllEmployees();
                    this.employeeIdUpdate = null;
                    this.employeeForm.reset();
                }
            );
        } 
    }
    deleteEmployee(employeeId: string) {
        if (confirm("Are you sure you want to delete this ?")) {
            this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {
                this.dataSaved = true;
                this.massage = 'Record Deleted Succefully';
                this.loadAllEmployees();
                this.employeeIdUpdate = null;
                this.employeeForm.reset();

            });
        }
    }
    resetForm() {
        this.employeeForm.reset();
        this.massage = null;
        this.dataSaved = false;
    }
}  

interface Persona {
    IDPERSONA: number,
    NOMBREPERSONA : string,
    DOCUMENTOPERSONA:	string,
    TELEFONOPERSONA: string;
}






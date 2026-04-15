import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud implements OnInit {
  empObject: Employee = new Employee();
  http = inject(HttpClient);
  //employList : Employee[] = [];
  employList = signal<Employee[]>([]);
  ngOnInit() {
    this.getAllEmployees();

  }

  onEditEmployee(obj : Employee)
  {
    const strEmp = JSON.stringify(obj);
    const empObject = JSON.parse(strEmp);
    this.empObject = empObject;
  }
  getAllEmployees() {
    this.http.get('http://localhost:3000/employees').subscribe({
      next: (res: any) => {
        this.employList.set(res);
        //debugger;
      },
    });
  }

  OnSaveEmployee() {
    this.http
      .post('http://localhost:3000/employees', this.empObject)
      .subscribe({
        next: (result: any) => {
          //debugger;
        },
      });
  }

  OnUpdateEmployee() {
    this.http
      .put('http://localhost:3000/employees/' + this.empObject.id, this.empObject)
      .subscribe({
        next: (result: any) => {
          this.getAllEmployees();
        },
      });
  }

  OnDeleteEmployee(id: number) {
    const bConfirm = confirm("Are you sure to delete this employee ?");
    if(bConfirm)
    {
      this.http
      .delete('http://localhost:3000/employees/' + id)
      .subscribe({
        next: (result: any) => {
          this.getAllEmployees();
        },
      });
    }
    
  }



}

class Employee {
  id: number;
  name: string;
  department: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.department = '';
  }
}

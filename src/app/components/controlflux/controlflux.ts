import { FormsModule } from '@angular/forms';
import { Component, signal, WritableSignal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-controlflux',
  imports: [FormsModule, NgClass],
  templateUrl: './controlflux.html',
  styleUrl: './controlflux.css',
})
export class Controlflux {
  isOfferCode : boolean = false;
  studentTotalMarks : number = 0;
  isSuccessVisible : WritableSignal<boolean> = signal(false);

  offerList : string [] = [
    "20% For New Users",
    "10% For Existing Users",
    "5% For Students",
    "25% For Black Friday"
  ];

  productCategoryList : string [] = [
    "Electronics",
    "Clothing",
    "Books",
    "Home Appliances",
    "Toys"
  ]


  employeeList : {name : string, department : string, isActive : boolean} [] = [
    {name : "Alice", department : "HR", isActive : true},
    {name : "Bob", department : "IT", isActive : false},
    {name : "Charlie", department : "Finance", isActive : true},
    {name : "David", department : "Marketing", isActive : false},
    {name : "Eve", department : "Sales", isActive : true},
    {name : "Frank", department : "Support", isActive : false},
    {name : "Grace", department : "Development", isActive : true},
    {name : "Heidi", department : "Design", isActive : false},
    {name : "Ivan", department : "Operations", isActive : true},
    {name : "Judy", department : "Legal", isActive : false},
    {name : "Karl", department : "Research", isActive : true},
    {name : "Leo", department : "Administration", isActive : false},
    {name : "Mallory", department : "Quality Assurance", isActive : true},
    {name : "Nina", department : "Project Management", isActive : false},
    {name : "Oscar", department : "Business Development", isActive : true},
    {name : "Peggy", department : "Customer Service", isActive : false},
    {name : "Quentin", department : "Logistics", isActive : true},
    {name : "Ruth", department : "Public Relations", isActive : false},
    {name : "Sybil", department : "Strategy", isActive : true},
    {name : "Trent", department : "Data Analysis", isActive : false}
  ]
  ToogleVisibility(){
    this.isSuccessVisible.set(!this.isSuccessVisible());
  }
}

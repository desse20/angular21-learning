import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
// String
  courseName: string = 'Angular 21 Tutorial';

  currentName = "Nise";

  //Number
  relNo :number =21;
  productPrice = 1200;

  //Boolean
  isActive :boolean = true;
  isPresent = false;

  //Date
  currentDate :Date = new Date();

  cityList : string [] = [
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Mumbai"
  ];

  rolNoArray : number [] = [
    1,47,58,1236
  ];

  nameList :string[] = [
    "Nise",
    "Ravi",
    "Suresh",
    "Anita"
  ];

  studentCard = {
    name : "Nise",
    age : 25,
    course : "Angular",
    email: "nise@example.com",
    lastLogin : new Date()
  }
// collections of objects
  studentList = [
    {
      name : "Nise",
      age : 25,
      course : "Angular",
      email: "nise@example.com",
      lastLogin : new Date()
    },
    {
      name : "Ravi",
      age : 28,
      course : "React",
      email: "ravi@example.com",
      lastLogin : new Date()
    }
  ]


  constructor() {
    this.courseName = "Typescript Tutorial";
    this.relNo = 22;
    this.isActive = false;
    this.currentDate = new Date("2024-06-01");

  }

}

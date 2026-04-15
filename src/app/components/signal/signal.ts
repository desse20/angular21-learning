import { Component,Signal,signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
// creating signal variables
  // courseName : string= "Angular 21 Tutorial";
  courseName = signal("Angular 21 Tutorial");
  rolNo = signal(101);
  student = signal({
    name : "Denise",
    age : 21,
    status : "Connected"
  })
  listTown = signal(["Paris", "New York", "Tokyo"]);

// signal with type
  courseDuration : Signal<string> = signal("3 Months");
  constructor() {
    setTimeout(() => {
      console.log("Before update: " + this.courseName());
      this.courseName.set("React 19 Tutorial ");
      console.log("After update: " + this.courseName());
    }, 3000);


  }

  changeCourse(){
      this.courseName.set("Next Js");
    }
}

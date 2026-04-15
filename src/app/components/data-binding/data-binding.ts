import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
// Interpolation: créer des varibles et y accéder dans le template
  courseName = 'Angular 21 Tutorial';
  cityName ="Cotonou";

  // Property Binding
  studentName = "Nise";
  className = "text-red-500";

  inputtype = "Hello"
  inputbutton = "Submit"

  // Event Binding
  showVoiceMessage(){
    alert("Welcome to Angular 21 Tutorial");
  }

  onStateChange (){
    alert("State has been changed");
  }

  changeCourseName(text : string){
    //Stocker la valeur de l'input dans la variable courseName
    this.courseName = text;
  }
}

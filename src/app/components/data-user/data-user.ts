import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-user',
  imports: [FormsModule],
  templateUrl: './data-user.html',
  styleUrl: './data-user.css',
})
export class DataUser {

UserData = {
  name : "Denise",
  age : 21,
  status : "Connected"
}

showMessage(){
    alert(`Welcome ${this.UserData.name}`);
  }

  //
  UpdateUserData(){
    console.log(this)
  }
  welcomeUser(){
      if (this.UserData.status === "Connected"){
        alert(`Welcome ${this.UserData.name}`);
      }else{
        alert("Please connect to see the message"); 4
      }
  }
  get Message(){
      return this.UserData.status === "Connected" ? `Welcome ${this.UserData.name}` : "Please connect to see the message";
  }


}

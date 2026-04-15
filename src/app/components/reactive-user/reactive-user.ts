import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser {
userForm : FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required,Validators.minLength(4)]),
    username: new FormControl("" , [Validators.required]),
    email : new FormControl("" , [Validators.required]),
    password : new FormControl("" , [Validators.required]),
    city: new FormControl("" , [Validators.required]),
    state: new FormControl("" , [Validators.required])
})
}

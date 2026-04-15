import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [NgClass,FormsModule, NgStyle],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
  myClassName : string = 'bg-green-500';

  isActive : boolean = false;

  priceProduct : number = 1000;

  divBackColor : string = "";
  isSidePanel = signal(false);
  myCss = {
    color : 'goldenrod',
    'background-color' : 'black',
    'font-size' : '35px',
    'border-radius' : '10px',
    'padding' : '10px',
    'text-align' : 'center'
  }


}

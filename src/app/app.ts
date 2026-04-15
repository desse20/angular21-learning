import { DataBinding } from './components/data-binding/data-binding';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataUser } from "./components/data-user/data-user";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21-tutorial');
}

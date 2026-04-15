import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-get-api',
  imports: [NgClass],
  templateUrl: './get-api.html',
  styleUrls: ['./get-api.css'],
})
export class GetApi implements OnInit {
  todoObject: Todo = new Todo();
  TodoService = inject(TodoService);
  private cdr = inject(ChangeDetectorRef);
  constructor(private http: HttpClient) {
    const res = this.TodoService.ConcatStrings("Angular", "Tutorial");
  }
  todoList : Todo[] = [];
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.TodoService.getTodos().subscribe(
      {
        next :(result: any) => {
          this.todoList = result;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Erreur lors du chargement des todos:', error);
        }
      }
    )
  }
}
class Todo {
      userId: number;
      id: number;
      title: string;
      completed: boolean;

  constructor() {
    this.userId = 0;
    this.id = 0;
    this.title = '';
    this.completed = false;
  }
}

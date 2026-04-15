import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  //Store
  //api
  //subject
  //functions
  course : string ="React 19 Tutorial";
  http = inject(HttpClient);
  ConcatStrings(str1: string, str2: string)  {
    const res = str1 + " " + str2;
    return res;
}
getTodos() {
  return this.http.get('http://localhost:3000/todos');
}
}

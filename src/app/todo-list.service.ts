import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private http: HttpClient) {}

  getTodoList() {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/`);
  }
}

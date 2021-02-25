import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos = [];
  constructor(private todolistService: TodoListService) {}

  ngOnInit(): void {
    this.todolistService.getTodoList().subscribe((data) => {
      this.todos = data;
    });
  }
}

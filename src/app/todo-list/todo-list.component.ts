import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo: any=[]


  constructor(private t:TodoserviceService) { }

  ngOnInit(): void {
    this.todo=this.t.getlist()
  }

}

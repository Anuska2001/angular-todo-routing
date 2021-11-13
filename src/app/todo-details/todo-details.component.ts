import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: any=[]

  constructor(private t:TodoserviceService) { }

  ngOnInit(): void {
    this.todo=this.t.getlist()
  }

}

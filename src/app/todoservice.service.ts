import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  tododetails=[
    {"name":"Anuska","id":254,"dept":"CSE","MS": "Artificial Intelligence"},
    {"name":"Saloni","id":190,"dept":"ECE", "MS": "CyberSecurity"},
    {"name":"Raj","id":200,"dept":"ME", "MS": "IoT"}
  ]
  getlist(){
    return this.tododetails
  }

  constructor() { }
}


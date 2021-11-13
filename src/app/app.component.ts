import { Component } from '@angular/core';
import {ServiceService} from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data:any
  constructor(private service: ServiceService){
    this.service.getData().subscribe(data=>{
      console.warn(data);
      this.data = data
    })
  }
}

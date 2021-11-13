import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    let url = 'https://api.spacexdata.com/v3/missions';
    return this.http.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  postData(data){
    let url = "http://localhost:8080/contact";
    return this.http.post(url, data);
  }

}

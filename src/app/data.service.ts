import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://localhost:8083";

  constructor(private http:HttpClient) {}

  getApi = (lien,data) => {
    return this.http.get (this.baseUrl + lien,data);
  }

  postApi = (lien,data)=> {
    return this.http.post(this.baseUrl+lien,data);
  }
}
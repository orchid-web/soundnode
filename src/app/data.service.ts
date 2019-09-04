import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://localhost:8083/";
  observableNavLog : Subject<Boolean> = new Subject<Boolean>();
  observableLinkLog : Subject<Boolean> = new Subject<Boolean>();
  obervableObserveLinkLog : Subject<Boolean> = new Subject<Boolean>();
  observableEmail : Subject<String> = new Subject<String>();

  constructor(private http: HttpClient) { }

  getApi = (lien, data) => {
    return this.http.get(this.baseUrl + lien, data);
  }

  postApi = (lien, data) => {
    return this.http.post(this.baseUrl + lien, data);
  }

  isLogged = () => {
    let token = localStorage.getItem('token');
    let email = localStorage.getItem('email');
    return this.http.post(this.baseUrl+"isLogged",{token: token, email : email});
  }
}

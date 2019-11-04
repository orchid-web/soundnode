import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService {
  baseUrl = "http://localhost:52349";
  constructor(private http:HttpClient) { }

  get = (url) => {
    return this.http.get(this.baseUrl + '/'+url);
  }

  post = (url, data) => {
    return this.http.post(this.baseUrl+"/"+url,data);
  }

  delete = (url) => {
    return this.http.delete(this.baseUrl+"/"+url);
  }
  put = (url,data) => {
    return this.http.put(this.baseUrl+"/"+url,data);
  }

  upload = (url, formdata)=> {
    //reportProgress => pour ecouter la progression de l'upload; observe => pour ecouter la totalité de l'event et non uniquement la réponse du serveur
    return this.http.post(this.baseUrl+'/'+url, formdata,{reportProgress: true, observe:'events'})
  }
}

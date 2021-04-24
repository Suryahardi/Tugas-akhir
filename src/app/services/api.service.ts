import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  serverUrl:any='http://api.sunhouse.co.id/bookstore/index.php/';
  constructor(
    public http:HttpClient
  ) { }
 
  get(url: any)
  {
    return this.http.get(this.serverUrl+url);
  }
  post(url: any,data: any)
  {
    return this.http.post(this.serverUrl+url,data);
  }
  put(url: any,data: any)
  {
   return this.http.put(this.serverUrl+url,data);
  }
  delete(url: string)
  {
   return this.http.delete(this.serverUrl+url);
  }

 }
 

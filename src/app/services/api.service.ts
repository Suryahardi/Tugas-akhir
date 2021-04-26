import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:any='http://api.sunhouse.co.id/bookstore/index.php/';
  constructor(
    public http:HttpClient
  ) { }

httpOptions:any;
 getToken()
 {
   var tokenKey=localStorage.getItem('appToken');
   if(tokenKey!=null)
   {
     var tkn=JSON.parse(tokenKey);
     this.httpOptions={
       headers:new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer '+tkn.token
       })
     }
   }
 }

  get(url: any)
 {
   this.getToken();
   return this.http.get(this.serverUrl+url,this.httpOptions);
 }

 post(url: any,data: any)
 {
  this.getToken();
  return this.http.post(this.serverUrl+url,data,this.httpOptions);
 }

 put(url: any,data: any)
 {
  this.getToken();
  return this.http.put(this.serverUrl+url,data,this.httpOptions);
 }

delete(url: any)
 {
  this.getToken();
  return this.http.delete(this.serverUrl+url,this.httpOptions);
 }
 
 register(email: any,password: any)
 {
   return this.http.post(this.serverUrl+'auth/register',{email:email,password:password});
 }

 login(email: any,password: any)
 {
   return this.http.post(this.serverUrl+'auth/login',{email:email,password:password});
 }
 upload(file: any)
 {
   return this.http.post(this.serverUrl+'upload/book',file);
 }


}
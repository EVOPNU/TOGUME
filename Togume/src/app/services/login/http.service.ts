import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(public http:HttpClient) { }

  myHeader = new HttpHeaders().set('access_token','Bearer '+localStorage.getItem('access_token'))

  logIn(Email:User['Email'],Password:User['Password']){
    return this.http.post('/api/v1/Authorization/Login',{Email, Password},{headers:{'Access-Control-Allow-Origin':'*'}})
  }

  logOut(){
    localStorage.removeItem('access_token')
  }

  getId(){
    return this.http.get('/api/v1/authorization/',{headers:this.myHeader})
  }

  get logInBool():Boolean{
    if (localStorage.getItem('access_token') !== null){
      return true
    } else return false
  }

}

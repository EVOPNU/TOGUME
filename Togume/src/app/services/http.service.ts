import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(public http:HttpClient) { }

  logIn(Email:User['Email'],Password:User['Password']){
    return this.http.post('/api/v1/user/Authorization/Login',{Email, Password})
  }

  logOut(){
    localStorage.removeItem('access_token')
  }

  logInConfirmantion(code:number){
    this.http.post('',code)
  }

  get logInBool():Boolean{
    if (localStorage.getItem('access_token') !== null){
      return true
    } else return false
  }

}

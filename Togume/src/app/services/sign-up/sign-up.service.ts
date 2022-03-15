import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(public http:HttpClient) { }

  registration(Email:User['Email'], Password:User['Password'],SecondPassword:string){
    return this.http.post('/api/v1/user/Authorization/Registration', {Email, Password, SecondPassword})
  }

  registrationConfirmation(Email:User['Email'], Password:User['Password'],SecondPassword:string, code:number){
    this.http.post('/api/v1/user/Authorization/Confrim',{Email, Password, SecondPassword, code})
  }
}

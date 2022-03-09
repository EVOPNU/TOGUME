import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // account:Account | undefined
  myHeader = new HttpHeaders().set('access_token','Bearer '+localStorage.getItem('access_token'))
  constructor(public http:HttpClient) { }

  getUserById(id:Account['id']){
    return this.http.get('/api/v1/user/account/'+id)
  }

  changePassword(id:Account['id'],oldPassword:Account['password'],newPassword:Account['password']){
    this.http.post('/api/v1/user/account/change/password',{id,oldPassword,newPassword}, {headers:this.myHeader})
  }
}

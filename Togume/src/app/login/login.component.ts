
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpService } from '../services/http.service';
import { User } from '../services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[HttpService]
})
export class LoginComponent implements OnInit {

  constructor(public httpService:HttpService, 
    public rout:ActivatedRoute, 
    public router:Router,
    public appComp:AppComponent) { }

    // this.appComp.user  --- сущность User для всех компонентов
    user = this.appComp.user
    error:any
    code:number = NaN
  ngOnInit(): void {

  }

  logIn(){
    this.httpService.logIn(this.user.Email,this.user.Password)
    .subscribe((data:any)=>{
      localStorage.setItem('access_token',data.access_token)
    },error=>{
      console.log(error)
      this.error = error
    })
  }

  logInConfirmantion(){
    this.httpService.logInConfirmantion(this.code)
  }

  logInCheck(){
     console.log(this.httpService.logInBool)
  }
}

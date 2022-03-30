import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SignUpService } from '../services/sign-up/sign-up.service';
import { User } from '../services/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User = new User(NaN,'','','')
  secondPassword:string = ""
  error:any
  showConfForm:boolean = false
  code:number = NaN

  constructor(private signUpService:SignUpService,
    public rout:ActivatedRoute,
    public router:Router,
    public appComp:AppComponent) { }



  ngOnInit(): void {
  }

  registration(){
    this.signUpService.registration(this.user.Email,this.user.Password,this.secondPassword)
    .subscribe((data:any)=>{
      this.showConfForm = !this.showConfForm
    },error=>{
      console.log(error)
      this.error=error
    })
  }

  registrationConfirmation(){
    this.signUpService.registrationConfirmation(this.user.Email,this.user.Password,this.secondPassword,this.code)
    this.router.navigateByUrl("/main")
  }

}

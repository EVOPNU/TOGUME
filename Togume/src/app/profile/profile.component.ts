
// import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../services/account/account';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AccountService]
})
export class ProfileComponent implements OnInit {

  constructor(
    public router:Router,
    public rout:ActivatedRoute,
    public accountHttp:AccountService) { }

  profileMore:boolean=false
  id:number = 1;
  clickChange:boolean=false
  account:Account = new Account(0,'почта','пароль','Alex','Awler','отчество','ДР','ПО-11','ФКФН','Авлер','Волк в цирке не выступает',NaN,NaN,NaN,NaN,'','Дата создания')
  ngOnInit(): void {
    this.accountHttp.getUserById() .subscribe((data:any)=>{
      this.account = data
    }, error=>{
      console.log(error)
      // this.router.navigateByUrl('/notfound')
    })
  }
  test(){
    this.accountHttp.test()
    .subscribe((data:any)=>{},error=>{console.log(error)})
  }
  clickChecker(){
    this.clickChange=!this.clickChange
  }
  changeMediaStatus(){
    this.accountHttp.changeMediaStatus(this.account.id,this.account.statusInProfile).subscribe((data:any)=>{},error=>{console.log(error)});
    console.log(this.account.statusInProfile)
    this.clickChange=!this.clickChange 
  }
  profileMoreInfo(){
    this.profileMore = !this.profileMore
  }

}

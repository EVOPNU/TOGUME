
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

  id:number = NaN;
  clickChange:boolean=false
  account:Account = new Account(NaN,'почта','пароль','Alex','Awler','отчество','ДР','ПО-11','ФКФН','Авлер','Волк в цирке не выступает',NaN,NaN,NaN,NaN,'','Дата создания')
  ngOnInit(): void {
    this.accountHttp.getUserById(this.id) .subscribe((data:any)=>{
      this.account = data
    }, error=>{
      console.log(error)
      // this.router.navigateByUrl('/notfound')
    })
  }
  clickChecker(){
    this.clickChange=!this.clickChange
  }
  changeMediaStatus(){
    this.accountHttp.changeMediaStatus(this.account.id,this.account.statusInProfile).subscribe((data:any)=>{},error=>{console.log(error)});
    console.log(this.account.statusInProfile)
    this.clickChange=!this.clickChange 
  }

}

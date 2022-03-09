
// import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../services/account/account';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private accountData:AccountService,
    router:Router,
    rout:ActivatedRoute) { }

  id:number = NaN
  account:Account |undefined

  ngOnInit(): void {
    this.accountData.getUserById(this.id) .subscribe((data:any)=>{
      this.account = data
    }, error=>{
      console.log(error)
    })
  }

}

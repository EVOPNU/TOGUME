import { Component, OnInit } from '@angular/core';
import { Account } from '../services/account/account';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(public account:AccountService) { }

  accountData:Account = new Account(NaN,'','','','','','','','','','',NaN,NaN,NaN,NaN,'','')

  ngOnInit(): void {
    this.account.getUserById().subscribe((data:any)=>{this.accountData.id = data})
  }

}

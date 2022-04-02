import { Component, OnInit } from '@angular/core';
import { Account } from '../services/account/account';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  //
    birthDay={
      'year' : '2022',
      'month': '1',
      'day' : '1'
    }
  //git commit -m "some fix API urls in accountService.ts, delete all input id:Account['id'] in accountService // start design configuration.comp.t

  constructor(public accountServiceHTTP:AccountService) { }

  accountData:Account = new Account(NaN,'','','','','','','','','','',NaN,NaN,NaN,NaN,'','')
  accountDataTemp:Account = new Account(NaN,'','','','','','','','','','',NaN,NaN,NaN,NaN,'','')

  ngOnInit(): void {
    this.accountServiceHTTP.getUserById().subscribe((data:any)=>{this.accountData = data})
  }

  //смена пароля
  changePassword(){
    this.accountServiceHTTP.changePassword(this.accountData.password,this.accountDataTemp.password)
  }

  //смена имени
  changeFirstName(){
    this.accountServiceHTTP.changeFirtsName(this.accountDataTemp.firstName)
  }

  //смена фамилия
  changeLastName(){
    this.accountServiceHTTP.changeLastName(this.accountDataTemp.lastName)
  }

  //смена - добавление отчества
  changePatronymic(){
    this.accountServiceHTTP.changePatronymic(this.accountDataTemp.thirdName)
  }

  //смена даты день рождения
  changeBirthDay(){
    this.accountServiceHTTP.changeBirthday(this.birthDay.year, this.birthDay.month, this.birthDay.day)
  }

  //смена группы университета
  changeUniversityGroup(){
    this.accountServiceHTTP.changeUniversityGroup(this.accountDataTemp.groupUniversity)
  }
  //смена факультета в университете
  changeFaculty(){
    this.accountServiceHTTP.changeUniversityFaculty(this.accountDataTemp.fakulty)
  }
  //смена ника
  changeNickname(){
    this.accountServiceHTTP.changeNickname(this.accountDataTemp.nickName)
  }
  //смена статуса в профиле
  changeMediaStatus(){
    this.accountServiceHTTP.changeMediaStatus(this.accountDataTemp.statusInProfile)
  }
  //смена аватара
  
}

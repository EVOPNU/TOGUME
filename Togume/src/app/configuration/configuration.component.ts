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
  //

  constructor(public accountServiceHTTP:AccountService) { }

  accountData:Account = new Account(NaN,'','','','','','','','','','',NaN,NaN,NaN,NaN,'','')
  accountDataTemp:Account = new Account(NaN,'','','','','','','','','','',NaN,NaN,NaN,NaN,'','')

  ngOnInit(): void {
    this.accountServiceHTTP.getUserById().subscribe((data:any)=>{this.accountData = data}, error=>{
      console.log(error)
    })
  }

  //смена пароля
  changePassword(){
    this.accountServiceHTTP.changePassword(this.accountData.password,this.accountDataTemp.password)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }

  //смена имени
  changeFirstName(){
    this.accountServiceHTTP.changeFirtsName(this.accountDataTemp.firstName)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }

  //смена фамилия
  changeLastName(){
    this.accountServiceHTTP.changeLastName(this.accountDataTemp.lastName)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }

  //смена - добавление отчества
  changePatronymic(){
    this.accountServiceHTTP.changePatronymic(this.accountDataTemp.thirdName)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }

  //смена даты день рождения
  changeBirthDay(){
    this.accountServiceHTTP.changeBirthday(this.birthDay.year, this.birthDay.month, this.birthDay.day)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }

  //смена группы университета
  changeUniversityGroup(){
    this.accountServiceHTTP.changeUniversityGroup(this.accountDataTemp.groupUniversity)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }
  //смена факультета в университете
  changeFaculty(){
    this.accountServiceHTTP.changeUniversityFaculty(this.accountDataTemp.fakulty)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }
  //смена ника
  changeNickname(){
    this.accountServiceHTTP.changeNickname(this.accountDataTemp.nickName)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }
  //смена статуса в профиле
  changeMediaStatus(){
    this.accountServiceHTTP.changeMediaStatus(this.accountDataTemp.statusInProfile)
    .subscribe((data:any)=>{},error=>{
      console.log(error)
      alert('Ошибочка')
    })
  }
  //смена аватара
  
}

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
  // тестовая апи
  test(){
    return this.http.get('')
  }
  // Получить пользователя по ID
  getUserById(){
    return this.http.get('/api/v1/user/account', {headers:this.myHeader})
  }

  // сменить пароль
  changePassword(oldPassword:Account['password'],newPassword:Account['password']){
    return this.http.post('/api/v1/user/account/change/password',{oldPassword,newPassword}, {headers:this.myHeader})
  }

  // сменить имя
  changeFirtsName(newFirstName:Account['firstName']){
    return this.http.put('/api/v1/user/account/change/firstname',newFirstName,{headers:this.myHeader})
  }

  // сменить фамилию
  changeLastName(newLastName:Account['lastName']){
    return this.http.put('/api/v1/user/account/change/lastname',newLastName,{headers:this.myHeader})
  }

  // сменить отчество
  changePatronymic(newThirdName:Account['thirdName']){
    return this.http.put('/api/v1/user/account/change/thirdname',newThirdName,{headers:this.myHeader})
  }

  // сменить день рождения
  changeBirthday(year:string,month:string,day:string){
    const newBirthDay = year + "-" + month + "-" + day;
    return this.http.put('/api/v1/user/account/change/birthday',newBirthDay,{headers:this.myHeader})
  }

  // сменить группу универа
  changeUniversityGroup( newGroupUniversity:string){
    return this.http.put('/api/v1/user/account/change/groupuniversity',newGroupUniversity,{headers:this.myHeader})
  }

  // сменить факультет в универе
  changeUniversityFaculty( newFakulty:string){
    return this.http.put('/api/v1/user/account/change/changefakulty',newFakulty,{headers:this.myHeader})
  }

  // сменить никнейм
  changeNickname(newNickName:string){
    return this.http.put('/api/v1/user/account/change/nickname',newNickName,{headers:this.myHeader})
  }

  // изменить статус
  changeMediaStatus(newStatusProfile:string){
    return this.http.put('/api/v1/user/account/change/statusinprofile',newStatusProfile,{headers:this.myHeader})
  }

  // изменить аватарку / фото на аве
  changeAvatarPhoto(newMainPhoto:string){
    return this.http.put('/api/v1/user/account/change/mainphoto',newMainPhoto,{headers:this.myHeader})
  }
}

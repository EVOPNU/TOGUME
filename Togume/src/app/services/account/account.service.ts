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

  // Получить пользователя по ID
  getUserById(id:Account['id']){
    return this.http.get('/api/v1/user/account/'+id, {headers:this.myHeader})
  }

  // сменить пароль
  changePassword(id:Account['id'],oldPassword:Account['password'],newPassword:Account['password']){
    this.http.post('/api/v1/user/account/change/password',{id,oldPassword,newPassword}, {headers:this.myHeader})
  }

  // сменить имя
  changeFirtsName(id:Account['id'],newFirstName:Account['firstName']){
    this.http.put('/api/v1/user/account/change/firstname',{id,newFirstName},{headers:this.myHeader})
  }

  // сменить фамилию
  changeLastName(id:Account['id'],newLastName:Account['lastName']){
    this.http.put('/api/v1/user/account/change/lastname',{id,newLastName},{headers:this.myHeader})
  }

  // сменить отчество
  changePatronymic(id:Account['id'],newThirdName:Account['thirdName']){
    this.http.put('/api/v1/user/account/change/thirdname',{id,newThirdName},{headers:this.myHeader})
  }

  // сменить день рождения
  changeBirthday(id:Account['id'],year:string,month:string,day:string){
    const newBirthDay = year + "-" + month + "-" + day;
    this.http.put('/api/v1/user/account/change/birthday',newBirthDay,{headers:this.myHeader})
  }

  // сменить группу универа
  changeUniversityGroup(id:Account['id'], newGroupUniversity:string){
    this.http.put('/api/v1/user/account/change/groupuniversity',{id,newGroupUniversity},{headers:this.myHeader})
  }

  // сменить факультет в универе
  changeUniversityFaculty(id:Account['id'], newFakulty:string){
    this.http.put('/api/v1/user/account/change/changefakulty',{id,newFakulty},{headers:this.myHeader})
  }

  // сменить никнейм
  changeNickname(id:Account['id'],newNickName:string){
    this.http.put('/api/v1/user/account/change/nickname',{id,newNickName},{headers:this.myHeader})
  }

  // изменить статус
  changeMediaStatus(id:Account['id'],newStatusProfile:string){
    return this.http.put('/api/v1/user/account/change/statusinprofile',{id,newStatusProfile},{headers:this.myHeader})
  }

  // изменить аватарку / фото на аве
  changeAvatarPhoto(id:Account['id'],newMainPhoto:string){
    this.http.put('/api/v1/user/account/change/mainphoto',{id,newMainPhoto},{headers:this.myHeader})
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  myHeader = new HttpHeaders().set('access_token','Bearer '+localStorage.getItem('access_token'))

  constructor(public http:HttpClient) { }

  createNewGroup(id:Group['id'],name:Group['name'],description:Group['description'],access:Group['access'],amount:number){
    return this.http.post('/api/v1/Groups/create',{id,name,description,access,amount},{headers:this.myHeader})
  }

  changeDataOfGroup(id:Group['id'],name:Group['name'],description:Group['description'],access:Group['access'],amount:number){
    return this.http.post('/api/v1/Groups/update',{id,name,description,access,amount},{headers:this.myHeader})
  }

  addNewUserInGroup(access:Group['access'],groupId:Group['id'],userId:Group['id']){
    return this.http.get('/api/v1/Groups/add/'+access+'/'+groupId+'/'+userId,{headers:this.myHeader})
  }
  
  showAllUsersGroups(userId:Group['id']){
    return this.http.get('/api/v1/Groups/us/'+userId,{headers:this.myHeader})
  }

  applicationForMembership(groupId:Group['id']){
   return this.http.get('/api/v1/Groups/req/'+groupId,{headers:this.myHeader})
  }

  showAllApplicationForMembershipOfGroup(groupId:Group['id']){
   return this.http.get('/api/v1/Groups/invgr/'+groupId,{headers:this.myHeader})
  }

  showAllUsersApplicationForMembership(){
   return this.http.get('/api/v1/Groups/invus',{headers:this.myHeader})
  }

  deleteApplicationForMembership(groupId:Group['id'],userId:Group['id']){
   return this.http.get('/api/v1/Groups/not/'+groupId+'/'+userId,{headers:this.myHeader})
  }

  appointAsModerator(groupId:Group['id'],userId:Group['id']){
   return this.http.get('/api/v1/Groups/right/'+groupId+'/'+userId,{headers:this.myHeader})
  }

  deleteOrLeaveOfGroup(groupId:Group['id'],userId:Group['id']){
   return this.http.get('/api/v1/Groups/delete/'+groupId+'/'+userId,{headers:this.myHeader})
  }

  destroyGroup(groupId:Group['id']){
   return this.http.get('/api/v1/Groups/exterminatus/'+groupId,{headers:this.myHeader})
  }
  
  dataOfGroup(groupId:Group['id']){
   return this.http.get('/api/v1/Groups/gr/'+groupId,{headers:this.myHeader})
  }

  showAllMembers(groupId:Group['id']){
   return this.http.get('/api/v1/Groups/ingroup/'+groupId,{headers:this.myHeader})
  }

  showAllGroups(){
   return this.http.get('/api/v1/Groups/allgroups',{headers:this.myHeader})
  }
}

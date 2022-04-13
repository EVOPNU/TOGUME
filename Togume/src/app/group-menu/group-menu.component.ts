import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/login/http.service';
import { GroupService } from '../services/group/group.service';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.css'],
  providers:[GroupService,HttpService]
})
export class GroupMenuComponent implements OnInit {

  allGroup:any

  constructor(public groupService:GroupService,
    public httpService:HttpService) { }

  ngOnInit(): void {
    let id = NaN;
    this.httpService.getId().subscribe((data:any)=>{
      id = data
      // 
      console.log(id)

    }, error=>{
      console.log('Ошибка получения айди')
      console.log(error)
      console.log(id)
    })
    if(id != NaN){
      this.groupService.showAllUsersGroups(id).subscribe((data:any)=>{
        this.allGroup = data
        
        // проверка получил или нет
        console.log('Получил список групп')

      }, error=>{
        alert('Не удалось получить список групп')
        console.log(error)
      })
    } else {
      alert('ERROR // id is NaN')
    }
  }

}

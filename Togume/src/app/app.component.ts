import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './services/guard/auth.guard';
import { HttpService } from './services/login/http.service';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public httpService:HttpService,
    public guardService:AuthGuard){

  }
  user:User = new User(NaN,'','','')

  ngOnInit(): void {
    this.httpService.getId().subscribe((data:any)=>{
      this.user.id = data
    })
  }
  title = 'Togume';

  // All data about user 


}

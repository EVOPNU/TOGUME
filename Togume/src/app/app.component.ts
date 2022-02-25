import { Component } from '@angular/core';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Togume';

  // All data about user 
  user:User = new User(NaN,'','','')

}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './services/guard/auth.guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GroupComponent } from './group/group.component';
import { ConfigurationComponent } from './configuration/configuration.component';

export const appRoutes:Routes=[
  // {path:'profile', component:ProfileComponent},
  {path:'profile/:id', canActivate:[AuthGuard] ,component:ProfileComponent},
  {path:'logIn', component:LoginComponent},
  {path:'registration', component:SignUpComponent},
  {path:'notfound', component:NotFoundPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundPageComponent,
    GroupComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

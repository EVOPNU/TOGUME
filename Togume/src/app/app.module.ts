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
import { FeedComponent } from './feed/feed.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupMenuComponent } from './group-menu/group-menu.component';

export const appRoutes:Routes=[
  // {path:'profile', component:ProfileComponent},
  {path:'', canActivate:[AuthGuard] ,component:FeedComponent},
  {path:'feed', canActivate:[AuthGuard] ,component:FeedComponent},
  {path:'groups', canActivate:[AuthGuard] ,component:GroupMenuComponent},
  {path:'groups/:id', canActivate:[AuthGuard] ,component:GroupComponent},
  {path:'profile/:id', canActivate:[AuthGuard] ,component:ProfileComponent},
  {path:'settings', canActivate:[AuthGuard] ,component:ConfigurationComponent},
  {path:'logIn', component:LoginComponent},
  {path:'registration', component:SignUpComponent},
  {path:'**', component:NotFoundPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundPageComponent,
    GroupComponent,
    ConfigurationComponent,
    FeedComponent,
    GroupCreateComponent,
    GroupMenuComponent
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

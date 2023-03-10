import { Component } from '@angular/core';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private loginService:LoginService){}
get getUser(){
  return  this.loginService?.userName;
}

get isLoggedIn(){
  return  this.loginService?.isLoggedIn;
}

logOut(){
  this.loginService.logOut();
 }
}

import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:String='';
  password:String='';
  
  constructor(private loginService:LoginService, private router:Router,){}
  
 login():void{
  this.loginService.login(this.userName, this.password);
  this.router.navigate(['/products']);
 }
}

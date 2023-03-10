import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName: String | undefined;
  password: String | undefined;
  constructor() { }
  login(userName: any, password: any) {
    this.userName = userName;
    this.password = password;
  }

  logOut() {
    this.userName = undefined;
    this.password = undefined;
  }

  get isLoggedIn(): boolean {
    if (this.userName && this.password) { return true } else { return false }
  }
}

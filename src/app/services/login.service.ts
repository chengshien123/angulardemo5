import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {User} from '../components/user-model';
import {Router} from '@angular/router';



@Injectable()
export class LoginService {
  private user: User;
  constructor(private router: Router) { }

  public login(user: User) {
    if (user.id === user.nickName) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/hero']);
    }
  }

  public logout(): void {
    localStorage.removeItem('currentUser');

  }
}

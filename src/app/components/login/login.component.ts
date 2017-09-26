import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {User} from '../user-model';
import {LoginService} from '../../services/login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  public error: Error;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public loginService: LoginService
  ) {
    console.log(this.loginService);
  }

  ngOnInit() {
    console.log('--- user-login-component ---');
    console.log(this.router);
    console.log(this.activatedRoute);

    const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    const routerState: RouterState = this.router.routerState;
    const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);
  }

  public doLogin(): void {
    console.log(this.user);
    this.loginService.login(this.user);
  }

  public doLogout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('hero');
  }

 /* public forgetPwd(): void{
    this.router.navigateByUrl('forgetpwd');
  }*/
}

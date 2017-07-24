import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginInfo = {};
  error: string;
  user: {};

  constructor(private mySession: SessionService, private routerThang: Router) { }

  ngOnInit() {
    this.mySession.isLoggedIn()
    .then(userInfo => {
      this.routerThang.navigate(['/app']);
    });
  }

  login() {
    const thePromise = this.mySession.login(this.loginInfo);

    console.log(this.loginInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      this.routerThang.navigate(['/app']);
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

}

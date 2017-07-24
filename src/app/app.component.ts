import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from './session.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gaming Frog';

  loginInfo = {};
  signupInfo = {};

  user: {};
  error: string;
  myData: any;

  constructor(private mySession: SessionService, private cookieservice: CookieService, private routerThang: Router) {}

  ngOnInit() {
    this.mySession.isLoggedIn()
    .then(userInfo => {
      this.user = userInfo
      return this.user
    });
    };

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

  signup() {
    const thePromise = this.mySession.signup(this.signupInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

  logout() {
    localStorage.removeItem('connect.sid');
    this.cookieservice.removeAll();
    this.mySession.logout()
      .then(() => {
        this.user = null;
        this.error = null;
      })
      .catch(err => this.error = err);
  }

  getPrivateData() {
    this.mySession.getPrivate()
      .then((data) => {
        this.myData = data;
        this.error = null;
      })
      .catch(err => this.error = err);
  }
}

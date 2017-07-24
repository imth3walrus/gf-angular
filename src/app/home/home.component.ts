import { Component, OnInit } from '@angular/core';

import { SessionService } from '../session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginInfo = {};
  signupInfo = {};

  user: any;
  error: string;
  myData: any;

  constructor(private mySession: SessionService) { }

  ngOnInit() {

  }

  // login() {
  //   const thePromise = this.mySession.login(this.loginInfo);
  //
  //   console.log(this.loginInfo);
  //
  //   thePromise.then((userInfo) => {
  //     this.user = userInfo;
  //     this.error = null;
  //   });
  //
  //   thePromise.catch((err) => {
  //     this.user = null;
  //     this.error = err;
  //   });
  // }

}

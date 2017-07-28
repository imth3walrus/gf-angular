import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent implements OnInit {

  user: {};
  error: string;
  matchInfo = {};
  match: any;


  constructor(private mySession: SessionService, private routerThang: Router) { }

  ngOnInit() {
    this.mySession.isLoggedIn()
    .then(userInfo => {
      this.user = userInfo
      return this.user
    })
    .catch((errResponse) => {
      const apiInfo = errResponse.json();
      this.error = apiInfo.message;
      this.routerThang.navigate(['/login']);
    });
  }

  newMatch() {
    const thePromise = this.mySession.newMatch(this.matchInfo);

    thePromise.then((matchInfo) => {
      this.match = matchInfo;
      this.error = null;
      document.getElementById("closeMatchModal").click();
      document.getElementById("openModalButton").click();
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

}

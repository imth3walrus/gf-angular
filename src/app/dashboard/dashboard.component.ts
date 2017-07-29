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
  errorMessage: string;
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
      this.errorMessage = apiInfo.message;
      this.routerThang.navigate(['/login']);
    });
  }

  newMatch() {
    const thePromise = this.mySession.newMatch(this.matchInfo);

    thePromise.then((matchInfo) => {
      this.match = matchInfo;
      document.getElementById("closeMatchModal").click();
      document.getElementById("openModalButton").click();
    });

    thePromise.catch((err) => {
      const apiInfo = err.json();
      this.errorMessage = apiInfo.message;
    });
  }

  refreshPage() {
    location.reload();
  }

}

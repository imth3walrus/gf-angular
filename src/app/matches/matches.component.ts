import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../session.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches = [];
  errorMessage: string = '';
  matchInfo = {};
  match: any;
  user: {};

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
    this.mySession.getMatches()
      .then((theGames) => {
        this.matches = theGames;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
  }
  newMatch() {
    const thePromise = this.mySession.newMatch(this.matchInfo);

    thePromise.then((matchInfo) => {
      this.match = matchInfo;
      this.matches.push(matchInfo);
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

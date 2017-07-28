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

  constructor(private mySession: SessionService, private routerThang: Router) { }

  ngOnInit() {
    this.mySession.getMatches()
      .then((theGames) => {
        this.matches = theGames;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-mymatches',
  templateUrl: './mymatches.component.html',
  styleUrls: ['./mymatches.component.css']
})
export class MymatchesComponent implements OnInit {

  myMatches = [];
  errorMessage: string = '';

  constructor(private mySession: SessionService, private routerThang: Router, private myRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mySession.myMatches()
      .then((theGames) => {
        this.myMatches = theGames;
      })
      .catch((err) => {
        this.errorMessage = 'There was an error. Try again later.';
      });
  }

}

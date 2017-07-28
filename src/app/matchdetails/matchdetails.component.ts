import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {

  singleMatch = {};
  errorMessage: string = '';

  constructor(private mySession: SessionService, private routerThang: Router, private myRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getMatchDetails(params['id']);
    });
  }

  getMatchDetails(id) {
    this.mySession.get(id)
      .then((theGame) => {
        console.log("===============zegame=======")
        console.log(theGame)
        this.singleMatch = theGame;
      })
      .catch((err) => {
        console.log("ERRROOORRR")
        this.errorMessage = 'Could not retrieve match details. Try again later.';
      });
  }

}

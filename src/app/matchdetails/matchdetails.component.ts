import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css']
})
export class MatchdetailsComponent implements OnInit {

  singleMatch : any;
  errorMessage: string = '';
  user: {};
  resultInfo : any;

  constructor(private mySession: SessionService, private routerThang: Router, private myRoute: ActivatedRoute) { }

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
    this.myRoute.params.subscribe((params) => {
      this.getMatchDetails(params['id']);
    });
  }

  getMatchDetails(id) {
    this.mySession.get(id)
      .then((theGame) => {
        this.singleMatch = theGame;
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve match details. Try again later.';
      });
  }

  joinMatch() {
    this.mySession.joinMatch(this.singleMatch['_id'])
    .then(() => {
      document.getElementById("joinModalButton").click();
    })
    .catch((err) => {
      const apiInfo = err.json();
      this.errorMessage = apiInfo.message;
    });
  }

  refreshPage() {
    location.reload();
  }

  matchResult() {
    this.mySession.matchResult(this.singleMatch['_id'], this.resultInfo)
    .then(() => {
      document.getElementById("resultsModalButton").click();
    })
    .catch((err) => {
      const apiInfo = err.json();
      this.errorMessage = apiInfo.message;
    });
  }

}

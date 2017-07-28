import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupInfo = {};

  user: any;
  error: string;
  myData: any;

  constructor(private mySession: SessionService) { }

  ngOnInit() {
  }

  signup() {
    const thePromise = this.mySession.signup(this.signupInfo);

    thePromise.then((userInfo) => {
      this.user = userInfo;
      this.error = null;
      window.location.href = '/app';
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err;
    });
  }

}

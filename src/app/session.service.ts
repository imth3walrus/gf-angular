import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {

  constructor(private myHttp: Http, private cookieservice: CookieService) { }

  signup (user) {
    const theOriginalPromise = this.myHttp.post('http://localhost:3000/api/signup', user, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  login (credentials) {
    const theOriginalPromise = this.myHttp.post('http://localhost:3000/api/login', credentials, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      // window.location.href = "/sign-up"
      return result.json();
    });

    return theParsedPromise;
  }

  facebookLogin () {
    const theOriginalPromise = this.myHttp.post('http://localhost:3000/api/auth/facebook', {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  logout () {

    return this.myHttp.post('http://localhost:3000/api/logout', {withCredentials: true})
      .toPromise()
      .then(result => {
        result.json()
      });
  }

  isLoggedIn () {
    return this.myHttp.get('http://localhost:3000/api/loggedin', {withCredentials: true})
      .toPromise()
      .then(result => result.json());
  }

  getMatches () {
    return this.myHttp.get('http://localhost:3000/api/matches', {withCredentials: true})
      .toPromise()
      .then(result => result.json());
  }

  newMatch (match) {
    const theOriginalPromise = this.myHttp.post('http://localhost:3000/api/match', match, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  get(id) {
    return this.myHttp.get(`http://localhost:3000/api/match/${id}`)
      .toPromise()
      .then(result => result.json())
  }

}

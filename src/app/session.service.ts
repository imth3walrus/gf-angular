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
    const theOriginalPromise = this.myHttp.post('https://gamingfrog-api.herokuapp.com/api/signup', user, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  login (credentials) {
    const theOriginalPromise = this.myHttp.post('https://gamingfrog-api.herokuapp.com/api/login', credentials, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      // window.location.href = "/sign-up"
      return result.json();
    });

    return theParsedPromise;
  }

  facebookLogin () {
    const theOriginalPromise = this.myHttp.post('https://gamingfrog-api.herokuapp.com/api/auth/facebook', {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  logout () {

    return this.myHttp.post('https://gamingfrog-api.herokuapp.com/api/logout', {withCredentials: true})
      .toPromise()
      .then(result => {
        result.json()
      });
  }

  isLoggedIn () {
    return this.myHttp.get('https://gamingfrog-api.herokuapp.com/api/loggedin', {withCredentials: true})
      .toPromise()
      .then(result => result.json());
  }

  getMatches () {
    return this.myHttp.get('https://gamingfrog-api.herokuapp.com/api/matches', {withCredentials: true})
      .toPromise()
      .then(result => result.json());
  }

  newMatch (match) {
    const theOriginalPromise = this.myHttp.post('https://gamingfrog-api.herokuapp.com/api/match', match, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  get(id) {
    return this.myHttp.get(`https://gamingfrog-api.herokuapp.com/api/match/${id}`)
      .toPromise()
      .then(result => result.json())
  }

  joinMatch (id) {
    const theOriginalPromise = this.myHttp.post(`https://gamingfrog-api.herokuapp.com/api/match/join/${id}`, id, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  matchResult (id, results) {
    const theOriginalPromise = this.myHttp.post(`https://gamingfrog-api.herokuapp.com/api/match/result/${id}`, results, {withCredentials: true}).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  myMatches() {
    return this.myHttp.get(`https://gamingfrog-api.herokuapp.com/api/my-matches`, {withCredentials: true})
      .toPromise()
      .then(result => result.json())
  }
}

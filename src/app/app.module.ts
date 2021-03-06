import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { SessionService } from "./session.service";
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
// import { FileSelectDirective } from 'ng2-file-upload';
import { CookieModule } from 'ngx-cookie';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { MymatchesComponent } from './mymatches/mymatches.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { BillingComponent } from './billing/billing.component';
import { DisputesComponent } from './disputes/disputes.component';
import { MessagesComponent } from './messages/messages.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    // FileSelectDirective,
    DashboardComponent,
    LoginComponent,
    MatchesComponent,
    MymatchesComponent,
    TournamentsComponent,
    LeaderboardsComponent,
    BillingComponent,
    DisputesComponent,
    MessagesComponent,
    MatchdetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CookieModule.forRoot(),
  ],
  providers: [SessionService, {provide: LocationStrategy, useClass: HashLocationStrategy}], 
  bootstrap: [AppComponent]
})
export class AppModule { }

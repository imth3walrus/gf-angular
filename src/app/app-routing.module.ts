import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { BillingComponent } from './billing/billing.component';
import { DisputesComponent } from './disputes/disputes.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { MessagesComponent } from './messages/messages.component';
import { MymatchesComponent } from './mymatches/mymatches.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const defaultRoutes: Routes = [
  { path: '', redirectTo: 'matches', pathMatch: 'full' },
  { path: 'matches', component: MatchesComponent },
  { path: 'my-matches', component: MymatchesComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'leaderboards', component: LeaderboardsComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'disputes', component: DisputesComponent },
  { path: 'messages', component: MessagesComponent }
]

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: DashboardComponent,
    children: defaultRoutes
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

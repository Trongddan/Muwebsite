import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CalendarComponent } from './page/myTeam/component/calendar/calendar.component';
import { MemberComponent } from './page/myTeam/component/member/member.component';
import { VoteComponent } from './page/myTeam/component/vote/vote.component';
import { MyTeamComponent } from './page/myTeam/myTeam.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"myteam",component:MyTeamComponent,children:[
    {path:"member",component:MemberComponent},
    {path:'vote',component:VoteComponent},
    {path:'calendar',component:CalendarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

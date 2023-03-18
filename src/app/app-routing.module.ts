import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { MyTeamComponent } from './page/myTeam/myTeam.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"myteam",component:MyTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

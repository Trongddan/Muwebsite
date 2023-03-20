import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTeamComponent } from './components/firstTeam/firstTeam.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LengendComponent } from './components/legend/legend.component';
import { ManagerComponent } from './components/manager/manager.component';
import { SliderBanner } from './components/sliderBanner/sliderBanner.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.components';
import { CalendarComponent } from './page/myTeam/component/calendar/calendar.component';
import { MemberComponent } from './page/myTeam/component/member/member.component';
import { VoteComponent } from './page/myTeam/component/vote/vote.component';
import { MyTeamComponent } from './page/myTeam/myTeam.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderBanner,
    FirstTeamComponent,
    ManagerComponent,
    MyTeamComponent,
    HomeComponent,
    MemberComponent,
    VoteComponent,
    CalendarComponent,
    LengendComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

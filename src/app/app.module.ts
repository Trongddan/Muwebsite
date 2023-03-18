import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTeamComponent } from './components/firstTeam/firstTeam.component';
import { HeaderComponent } from './components/header/header.component';
import { ManagerComponent } from './components/manager/manager.component';
import { SliderBanner } from './components/sliderBanner/sliderBanner.component';
import { HomeComponent } from './page/home/home.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

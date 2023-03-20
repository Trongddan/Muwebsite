import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [AppComponent, HeaderComponent,SliderBanner,FirstTeamComponent,ManagerComponent,LengendComponent,FooterComponent],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

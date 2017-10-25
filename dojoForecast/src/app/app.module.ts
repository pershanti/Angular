import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import {GetWeatherService} from './get-weather.service'

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    DcComponent,
    SanjoseComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

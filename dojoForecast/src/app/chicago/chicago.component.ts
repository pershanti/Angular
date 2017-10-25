import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from '../get-weather.service'


@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  data = {}
  constructor(private _weather: GetWeatherService) {
    this._weather.getData("chicago")
  }

  ngOnInit() {
    if (this._weather.gotData == true) {
      this.data = this._weather.data;
    }
  }
  

}

import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from '../get-weather.service'


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  data = {}
  constructor(private _weather: GetWeatherService) {
    this._weather.getData("seattle")
  }

  ngOnInit() {
    if (this._weather.gotData == true) {
      this.data = this._weather.data;
    }
  }

}

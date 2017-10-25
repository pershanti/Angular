import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from '../get-weather.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  data = {}
  constructor(private _weather: GetWeatherService) {
    this._weather.getData("sanjose")
  }

  ngOnInit() {
    if (this._weather.gotData == true) {
      this.data = this._weather.data;
    }
  }

}

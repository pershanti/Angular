import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from '../get-weather.service'

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  data = {}
  constructor(private _weather: GetWeatherService) {
    this._weather.getData("dc")
  }

  ngOnInit() {
    if (this._weather.gotData == true) {
      this.data = this._weather.data;
    }
  }

}

import {Component,OnInit} from '@angular/core';
import {GetWeatherService} from '../get-weather.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  data = {}
  constructor(private _weather: GetWeatherService) {
    this._weather.getData("burbank")
  }

  ngOnInit() {
    if (this._weather.gotData == true) {
      this.data = this._weather.data;
    }
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class GetWeatherService {

  constructor(private _http: Http) { }
  gotData = false
  
  data = {
    "Humidity": 0,
    "Tempavg": 0,
    "Temphigh": 0,
    "Templow": 0,
    "Status": 0
  }

  getData(city) {
    this.gotData = true
    let city_id;

    switch (city) {
      case 'sanjose': city_id = 5392171
      case 'burbank': city_id = 4885983
      case 'seattle': city_id =  5809844
      case 'dallas': city_id =  4684888
      case 'dc': city_id = 4140963
      case 'chicago':  city_id = 3582383
    }

    this._http.get("http://api.openweathermap.org/data/2.5/forecast?"+city_id+"&APPID=725e883c6a35a71f47367e8f07263b03").subscribe(
      (response) => {
        this.data.Humidity = parseFloat(response.json().list[0].main.humidity) - 273.15
        this.data.Tempavg = parseFloat(response.json().list[0].main.temp) - 273.15
        this.data.Temphigh = parseFloat(response.json().list[0].main.temp_max) - 273.15
        this.data.Templow = parseFloat(response.json().list[0].main.temp_min) - 273.15
        this.data.Status = response.json().list[0].weather[0].description
      },
      (error) => {
          console.log(error)
      }
    )
  }
}

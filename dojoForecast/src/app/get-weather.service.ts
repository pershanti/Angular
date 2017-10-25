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

    this._http.get("http://api.openweathermap.org/data/2.5/forecast?id="+city_id+"&APPID=725e883c6a35a71f47367e8f07263b03").subscribe(
      (response) => {
        this.data.Humidity =  Math.floor(parseInt(response.json().list[0].main.humidity))
        this.data.Tempavg = Math.floor(parseInt(response.json().list[0].main.temp)*9/5 - 459.67)
        this.data.Temphigh = Math.floor(parseInt(response.json().list[0].main.temp_max)*9/5 - 459.67)
        this.data.Templow = Math.floor(parseInt(response.json().list[0].main.temp_min)*9/5 - 459.67)
        this.data.Status = response.json().list[0].weather[0].description
      },
      (error) => {
          console.log(error)
      }
    )
  }
}

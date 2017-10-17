import { Component } from '@angular/core';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'app';
  colorlist = ['LightSeaGreen',
    'LemonChiffon',
    'LightCoral',
    'LightSkyBlue',
    'LightSteelBlue',
    'LightGreen',
    'Lavender',
    'Plum',
    'LightPink'];
  generatedList = [
    this.colorlist[getRandomInt(0, 9)],
    this.colorlist[getRandomInt(0, 9)],
    this.colorlist[getRandomInt(0, 9)],
    this.colorlist[getRandomInt(0, 9)]
  ];
}

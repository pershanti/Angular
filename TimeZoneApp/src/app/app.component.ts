import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  time;
  switchP = false;
  switchM = false;
  switchC = false;
  switchE = false;

  clear() {
    this.time = null;
    this.switchP = false;
    this.switchM = false;
    this.switchC = false;
    this.switchE = false;
  }
  display(timezone) {
    if (timezone === 'PST') {
      this.switchP = true;
      const offset = -7;
      this.time = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, '');
    }
    if (timezone === 'MST') {
      this.switchM = true;
      const offset = -6;
      this.time = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, '');
    }
    if (timezone === 'CST') {
      this.switchC = true;
      const offset = -5;
      this.time = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, '');
    }
    if (timezone === 'EST') {
      this.switchE = true;
      const offset = -4;
      this.time = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, '');
    }
  }
}

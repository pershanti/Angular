import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Email List';
  emailList: any = [
      { name: 'Bob', email: 'BOB@email.com', importance: false, subject: 'hi!', content: 'hey I just wanted to let you know' },
      { name: 'Anna', email: 'anna@banana.com' , importance: true, subject: 'hello!', content: 'hey I just wanted to let you know' },
      { name: 'Coding', email: 'coding@dojo.com' , importance: true, subject: 'hola!', content: 'hey I just wanted to let you know' }
    ];
}

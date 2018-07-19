import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Form';
  date = Date()
  constructor() {
    setInterval(() => {
      this.date = Date()
    },1000); 
  }
}

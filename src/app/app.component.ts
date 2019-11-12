import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'net';
<<<<<<< HEAD
=======
  message:string;
  
  receiveMessage($event) {
    this.message = $event
  }
>>>>>>> 4b2f9bd11c734637f2de625d89995a932f09f4af
}

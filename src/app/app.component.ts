import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'paymentApp';
  status: boolean = false;

  //** show/close menu, change icon of hamburger */
  hamburgerActive() {
    this.status = !this.status;
  }
  selected(item: string) {
    //Send menu a - item
    this.hamburgerActive(); //Use to close menu
  }
}

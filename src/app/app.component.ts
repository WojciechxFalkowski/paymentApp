import { Component } from '@angular/core';
import { InputServiceService } from './services/input-service.service';
import { Transaction } from './models/transaction';
import { RecentActivityService } from './services/recent-activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'paymentApp';
  status: boolean = false;

  transactions: Array<Transaction> = [];
  newTransactions: Array<Transaction> = [];
  constructor(
    private inputService: InputServiceService,
    private recentActivityService: RecentActivityService
  ) {}
  ngOnInit(): void {
    this.transactions = this.recentActivityService.getTransactions();
    this.inputService.addValue(this.recentActivityService.getTransactions());
  }
  //** show/close menu, change icon of hamburger */
  hamburgerActive() {
    this.status = !this.status;
  }
  selected(item: string) {
    //Send menu a - item
    this.hamburgerActive(); //Use to close menu
  }
  values = '';

  onKey(event: any) {
    this.newTransactions = [];
    this.values = event.target.value;
    this.transactions.map((transaction) => {
      if (
        transaction.transaction
          .toLowerCase()
          .includes(this.values.toLowerCase())
      ) {
        this.newTransactions.push(transaction);
      }
    });
    this.inputService.addValue(this.newTransactions);
  }
}

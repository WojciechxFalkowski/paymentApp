import { Component, OnInit, DoCheck } from '@angular/core';
import { Transaction } from './../models/transaction';
import { RecentActivityService } from './../services/recent-activity.service';
import { InputServiceService } from './../services/input-service.service';
@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css'],
  providers: [],
})
export class RecentActivityComponent implements OnInit, DoCheck {
  transactions: Array<Transaction> = [];
  constructor(
    private recentActivityService: RecentActivityService,
    private inputService: InputServiceService
  ) {
    this.inputService.getValue().subscribe((transactions) => {
      console.log('Tutaj powinno coś byĆ ', transactions);
      this.transactions = transactions;
    });
  }

  ngOnInit(): void {
    // this.transactions = this.recentActivityService.getTransactions();
    this.inputService.getValue().subscribe((transactions) => {
      console.log('Tutaj powinno coś byĆĆ ', transactions);
      this.transactions = transactions;
    });
  }
  ngDoCheck() {
    this.inputService.getValue().subscribe((transactions) => {
      console.log('Tutaj powinno coś by ', transactions);
      this.transactions = transactions;
    });
  }
}

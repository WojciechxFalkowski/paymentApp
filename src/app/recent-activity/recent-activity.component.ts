import { Component, OnInit } from '@angular/core';
import { Transaction } from './../models/transaction';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css'],
  providers: [],
})
export class RecentActivityComponent implements OnInit {
  transactions: Array<Transaction> = [];
  sortTransactions: Array<Transaction> = [];
  status: boolean = false;
  flag: string = '';
  state: string = '';
  states = {
    transaction: 0,
    amount: 0,
    status: 0,
    date: 0,
  };
  constructor(private dataService: DataService) {
    this.transactions = dataService.getLastTransactions(5);
  }
  ngOnInit(): void {}
  onClickTransaction(nameTransaction) {
    nameTransaction = nameTransaction.toLowerCase();
    this.flag = this.flag.toLowerCase();
    if (this.flag === nameTransaction) {
      this.transactions.reverse();
    } else {
      this.states = {
        transaction: 0,
        amount: 0,
        status: 0,
        date: 0,
      };
      this.status = !this.status;
      this.flag = nameTransaction;
      for (let j = 0; j < this.transactions.length - 1; j++) {
        for (let i = 0; i < this.transactions.length - 1; i++) {
          if (
            this.transactions[i][nameTransaction] >=
            this.transactions[i + 1][nameTransaction]
          ) {
          } else {
            let pom = this.transactions[i];
            this.transactions[i] = this.transactions[i + 1];
            this.transactions[i + 1] = pom;
          }
        }
      }
    }
    this.states[nameTransaction]++;
  }
}

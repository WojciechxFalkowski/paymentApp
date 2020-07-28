import { Component, OnInit } from '@angular/core';
import { Transaction } from './../models/transaction';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
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
  newTransactions: Array<Transaction> = [];
  values = '';
  constructor(private dataService: DataService) {
    this.transactions = dataService.getTransactions();
    this.newTransactions = dataService.getTransactions();
  }

  ngOnInit(): void {}

  onClickTransaction(nameTransaction) {
    nameTransaction = nameTransaction.toLowerCase();
    this.flag = this.flag.toLowerCase();
    if (this.flag === nameTransaction) {
      this.newTransactions.reverse();
    } else {
      this.states = {
        transaction: 0,
        amount: 0,
        status: 0,
        date: 0,
      };
      this.status = !this.status;
      this.flag = nameTransaction;
      /**SORT METHOD */
      for (let j = 0; j < this.newTransactions.length - 1; j++) {
        for (let i = 0; i < this.newTransactions.length - 1; i++) {
          if (
            this.newTransactions[i][nameTransaction] >=
            this.newTransactions[i + 1][nameTransaction]
          ) {
          } else {
            let pom = this.newTransactions[i];
            this.newTransactions[i] = this.newTransactions[i + 1];
            this.newTransactions[i + 1] = pom;
          }
        }
      }
    }
    this.states[nameTransaction]++;
    console.log('DZIALA');
  }
  select(transaction) {}
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
    console.log('dziala');
  }
}

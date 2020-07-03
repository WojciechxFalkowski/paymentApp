import { Component, OnInit, DoCheck } from '@angular/core';
import { Transaction } from './../models/transaction';
import { InputServiceService } from './../services/input-service.service';
@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css'],
  providers: [],
})
export class RecentActivityComponent implements OnInit, DoCheck {
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
  constructor(private inputService: InputServiceService) {
    this.inputService.getValue().subscribe((transactions) => {
      this.transactions = transactions;
    });
  }

  ngOnInit(): void {}
  ngDoCheck() {}
  onClickTransaction(nameTransaction) {
    nameTransaction = nameTransaction.toLowerCase();
    this.flag = this.flag.toLowerCase();
    if (this.flag === nameTransaction) {
      // console.log('Sa równe');
      // console.log(this.flag, nameTransaction);
      this.transactions.reverse();
    } else {
      this.states = {
        transaction: 0,
        amount: 0,
        status: 0,
        date: 0,
      };
      this.status = !this.status;
      // console.log('Nie sa równe');
      // console.log(this.flag, nameTransaction);
      this.flag = nameTransaction;

      // this.status = !this.status;
      // if (!this.status) {
      //   this.transactions.reverse();
      // }

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
    console.log(this.states);

    // let a = false;
    // for (let j = 0; j < this.transactions.length - 1; j++) {
    //   if (
    //     this.transactions[j][nameTransaction] >=
    //     this.transactions[j + 1][nameTransaction]
    //   ) {
    //     a = true;
    //   } else {
    //     a = false;
    //     break;
    //   }
    // }
    // if (a)
    //   console.log(
    //     `Wartości dla pól ${nameTransaction} sa posortowane malejąco`
    //   );
    // else
    //   console.log(`Wartości dla pól ${nameTransaction} są posortowane rosnąco`);
  }
}

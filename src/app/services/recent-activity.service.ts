import { Injectable } from '@angular/core';
import { Transaction } from './../models/transaction';
@Injectable({
  providedIn: 'root',
})
export class RecentActivityService {
  private transactions: Array<Transaction> = [
    {
      transaction: 'Payment from Molly Sanders',
      amount: 520000,
      status: 'Success',
      date: new Date(2020, 4, 5),
    },
    {
      transaction: 'Payment to Doug Mann',
      amount: 19500,
      status: 'Processing',
      date: new Date(2020, 3, 28),
    },
    {
      transaction: 'Payment to Erica Frost',
      amount: 8750,
      status: 'Success',
      date: new Date(2020, 3, 9),
    },
    {
      transaction: 'Added from account ****5555',
      amount: 300,
      status: 'Failed',
      date: new Date(2020, 2, 15),
    },
    {
      transaction: 'Payment from Hank Douglas',
      amount: 20000,
      status: 'Success',
      date: new Date(2020, 1, 19),
    },
    {
      transaction: 'Payment from Hank Chase',
      amount: 7250,
      status: 'Success',
      date: new Date(2020, 1, 5),
    },
    {
      transaction: 'Payment to Molly Sanders',
      amount: 475,
      status: 'Success',
      date: new Date(2020, 0, 26),
    },
  ];
  getTransactions() {
    return this.transactions;
  }
  constructor() {}
}

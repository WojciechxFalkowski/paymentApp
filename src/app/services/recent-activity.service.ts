import { Injectable } from '@angular/core';
import { Transaction } from './../models/transaction';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root',
})
export class RecentActivityService {
  private transactions: Array<Transaction> = [];
  constructor(private dataService: DataService) {
    this.transactions = dataService.getLastTransactions(5);
  }
  getTransactions() {
    return this.transactions;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Transaction } from './../../models/transaction';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  id = '';
  transactions: Array<Transaction> = [];
  transaction: Transaction = {
    account_id: '',
    ref_id: '',
    transaction: '',
    type_transaction: '', //wpływ na rachunek,zakup przy uzyciu karty
    amount: 0,
    iso_currency_code: '',
    status: '',
    country: '',
    authorized_date: new Date(),
    date: new Date(),
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.transactions = dataService.getTransactions();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.transaction = this.transactions.filter(
      (transaction) => transaction.account_id == this.id
    )[0];
  }
  clickArrow() {
    this.router.navigate(['/history']);
  }
}

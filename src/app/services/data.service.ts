import { Injectable } from '@angular/core';
import { Transaction } from './../models/transaction';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  date = new Date();
  todayDate = [
    this.date.getFullYear(),
    this.date.getMonth(),
    this.date.getDate(),
    this.date.getHours(),
    this.date.getMinutes(),
    this.date.getSeconds(),
  ];

  transactions: Array<Transaction> = [
    {
      account_id: '3e5c3e6ae9b34cfb971ac14g422aa2cb',
      ref_id: '',
      transaction: 'Payment to Doug Mann',
      type_transaction: 'in',
      amount: 1800,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Poland',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '22cb68ecccc32d7b90175052f34be544',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'out',
      amount: 1222,
      iso_currency_code: 'USD',
      status: 'Failed',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 1,
        this.todayDate[3] + 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 1,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '5864bbfde2dc495ab27200f8f94b1b23',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: 'in',
      amount: 4212,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Italy',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 1,
        this.todayDate[3] + 1,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 2,
        this.todayDate[3] - 5,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '75c8086d8bfb4c68a7c7c0270fc1cef7',
      ref_id: '',
      transaction: 'Payment from Molly Sanders',
      type_transaction: 'out',
      amount: 1000,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Germany',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 1,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 2,
        this.todayDate[3] - 8,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '5a6e0bae3c5c4cb997fe6510bf375c05',
      ref_id: '',
      transaction: 'Payment to Molly Sanders',
      type_transaction: 'In',
      amount: 475,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Germany',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 2,
        this.todayDate[3] - 1,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 3,
        this.todayDate[3] - 5,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '2e5c3e6ae9b34cfb971ac14e422aa2cb',
      ref_id: '',
      transaction: 'Payment to Doug Mann',
      type_transaction: 'Out',
      amount: 300,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Poland',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 3,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 4,
        this.todayDate[3] - 3,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '12323f2fc92c471d881698e2f0920df6',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'Out',
      amount: 1222,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 5,
        this.todayDate[3] - 1,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '59664f2fc92c471d881698e2f0920df6',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'In',
      amount: 7250,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 5,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'dc0c6c0442b9479480d88d33dff444ce',
      ref_id: '',
      transaction: 'Payment to Doug Mann',
      type_transaction: 'In',
      amount: 19500,
      iso_currency_code: 'USD',
      status: 'Processing',
      country: 'Poland',
      authorized_date: new Date(2020, 1, 9, 21, 2, 5),
      date: new Date(2020, 1, 5, 21, 2, 5),
    },
    {
      account_id: 'bdbb3e56c8d44f5f96741efc5edfb107',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: '',
      amount: 8750,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'England',
      authorized_date: new Date(2020, 3, 10, 21, 2, 2),
      date: new Date(2020, 3, 9, 9, 21, 16),
    },
    {
      account_id: '32896dc47ccf4f2aa647175da0c69336',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: '',
      amount: 300,
      iso_currency_code: 'USD',
      status: 'Failed',
      country: 'Italy',
      authorized_date: new Date(2020, 2, 16, 9, 20, 6),
      date: new Date(2020, 2, 15, 21, 2, 5),
    },
    {
      account_id: 'd681203df9034dab97c2472c7622e3ba',
      ref_id: '',
      transaction: 'Payment from Hank Douglas',
      type_transaction: '',
      amount: 20000,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Finland',
      authorized_date: new Date(2020, 1, 20, 21, 2, 5),
      date: new Date(2020, 1, 19, 3, 2, 5),
    },

    {
      account_id: '1e11ac6baf9b4f3ba2e157530c6e5136',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: '',
      amount: 7250,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'England',
      authorized_date: new Date(2019, 11, 6, 9, 20, 6),
      date: new Date(2019, 11, 4, 8, 20, 13),
    },

    {
      account_id: '52cb68ee01c64d7b90175052f34be569',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: '',
      amount: 200,
      iso_currency_code: 'USD',
      status: 'Failed',
      country: 'USA',
      authorized_date: new Date(2019, 7, 21, 6, 10, 3),
      date: new Date(2019, 7, 20, 8, 20, 13),
    },
    {
      account_id: '5864bbfde2dc495ab27200f8f94b1b23',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: '',
      amount: 100,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Italy',
      authorized_date: new Date(2019, 5, 16, 6, 10, 3),
      date: new Date(2019, 5, 15, 16, 2, 6),
    },
  ];
  getTransactions() {
    return this.transactions;
  }
  getLastTransactions(amount: number) {
    return this.transactions.slice(0, amount);
  }
  getLastWeekTransaction() {
    let date = new Date(
      this.todayDate[0],
      this.todayDate[1],
      this.todayDate[2] - 6,
      this.todayDate[3],
      this.todayDate[4],
      this.todayDate[5]
    );
    let transaction = this.transactions.filter(
      (transaction) =>
        transaction.date >= date && transaction.status === 'Success'
    );
    return transaction;
  }
  getMoney() {
    let accountMoney: number = 0;
    this.transactions.map((transaction) => {
      accountMoney += transaction.amount;
    });
    return accountMoney;
  }
  getLastWeekTransactionMoney() {
    let transaction = this.getLastWeekTransaction();
    let money = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < transaction.length; ++i) {
      if (
        transaction[i].date >=
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 6,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          ) &&
        transaction[i].date <
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 5,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          )
      ) {
        if (transaction[i].type_transaction.toLowerCase() === 'in') {
          money[0] = money[0] + transaction[i].amount;
        } else if (transaction[i].type_transaction.toLowerCase() === 'out') {
          money[0] = money[0] - transaction[i].amount;
        }
      } else if (
        transaction[i].date >=
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 5,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          ) &&
        transaction[i].date <
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 4,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          )
      ) {
        if (transaction[i].type_transaction.toLowerCase() === 'in') {
          money[1] = money[1] + transaction[i].amount;
        } else if (transaction[i].type_transaction.toLowerCase() === 'out') {
          money[1] = money[1] - transaction[i].amount;
        }
      } else if (
        transaction[i].date >=
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 4,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          ) &&
        transaction[i].date <
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 3,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          )
      ) {
        if (transaction[i].type_transaction.toLowerCase() === 'in') {
          money[2] = money[2] + transaction[i].amount;
        } else if (transaction[i].type_transaction.toLowerCase() === 'out') {
          money[2] = money[2] - transaction[i].amount;
        }
      } else if (
        transaction[i].date >=
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 3,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          ) &&
        transaction[i].date <
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 2,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          )
      ) {
        if (transaction[i].type_transaction.toLowerCase() === 'in') {
          money[3] = money[3] + transaction[i].amount;
        } else if (transaction[i].type_transaction.toLowerCase() === 'out') {
          money[3] = money[3] - transaction[i].amount;
        }
      } else if (
        transaction[i].date >=
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 2,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          ) &&
        transaction[i].date <
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - 1,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          )
      ) {
        if (transaction[i].type_transaction.toLowerCase() === 'in') {
          money[4] = money[4] + transaction[i].amount;
        } else if (transaction[i].type_transaction.toLowerCase() === 'out') {
          money[4] = money[4] - transaction[i].amount;
        }
      } else {
        if (transaction[i].type_transaction.toLowerCase() === 'in') {
          money[5] = money[5] + transaction[i].amount;
        } else if (transaction[i].type_transaction.toLowerCase() === 'out') {
          money[5] = money[5] - transaction[i].amount;
        }
      }
    }
    for (let i = 0; i < 6; ++i) {
      money[i] = this.getMoney() - money[i];
    }

    return money;
  }

  getLastDayDates() {
    let dates: Array<Date> = [];
    for (let i = 0; i <= 24 / 3; ++i) {
      dates.push(
        new Date(
          this.todayDate[0],
          this.todayDate[1],
          this.todayDate[2] - 1,
          this.todayDate[3] + i * 3,
          this.todayDate[4],
          this.todayDate[5]
        )
      );
    }
    return dates;
  }
  getLastDayHours() {
    let dates = this.getLastDayDates();
    let hoursDates: Array<string> = [];
    for (let i = 0; i < dates.length; ++i) {
      hoursDates.push(`${dates[i].getHours()}:${dates[i].getMinutes()}`);
    }
    return hoursDates;
  }
  getLastDayTransaction() {
    let transactions = this.getLastWeekTransaction();
    let dates = this.getLastDayDates();
    let money: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    transactions = transactions.filter(
      (transaction) =>
        transaction.date >=
        new Date(
          this.todayDate[0],
          this.todayDate[1],
          this.todayDate[2] - 1,
          this.todayDate[3],
          this.todayDate[4],
          this.todayDate[5]
        )
    );
    for (let i = 0; i < transactions.length; ++i) {
      if (
        transactions[i].date >= dates[0] &&
        transactions[i].date <= dates[1]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[0] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[0] -= transactions[i].amount;
        }
      }
      if (
        transactions[i].date >= dates[1] &&
        transactions[i].date <= dates[2]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[1] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[1] -= transactions[i].amount;
        }
      }
      if (
        transactions[i].date >= dates[2] &&
        transactions[i].date <= dates[3]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[2] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[2] -= transactions[i].amount;
        }
      }
      if (
        transactions[i].date >= dates[3] &&
        transactions[i].date <= dates[4]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[3] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[3] -= transactions[i].amount;
        }
      }
      if (
        transactions[i].date >= dates[4] &&
        transactions[i].date <= dates[5]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[4] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[4] -= transactions[i].amount;
        }
      }
      if (
        transactions[i].date >= dates[5] &&
        transactions[i].date <= dates[6]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[5] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[5] -= transactions[i].amount;
        }
      }
      if (
        transactions[i].date >= dates[6] &&
        transactions[i].date <= dates[7]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[6] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[6] -= transactions[i].amount;
        }
      }
      if (transactions[i].date >= dates[7]) {
        if (transactions[i].type_transaction.toLowerCase() === 'in') {
          money[7] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === 'out') {
          money[7] -= transactions[i].amount;
        }
      }
    }
    for (let i = 0; i < money.length; ++i) {
      money[i] = this.getMoney() - money[i];
    }
    return money;
  }
}

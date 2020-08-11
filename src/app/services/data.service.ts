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
      account_id: '12323f2fc921471d881698e2f0920df6',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'Out',
      amount: 1500,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
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
        this.todayDate[3] - 4,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3] - 4,
        this.todayDate[4] - 10,
        this.todayDate[5]
      ),
    },
    {
      account_id: '22241f2fc92c471d881248e2f0920df6',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'out',
      amount: 3250,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3] - 7,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3] - 7,
        this.todayDate[4] - 20,
        this.todayDate[5]
      ),
    },
    {
      account_id: 'bdbb3e56fas44f5f96741efc5edfb107',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'in',
      amount: 8750,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3] - 10,
        this.todayDate[4] - 21,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3] - 11,
        this.todayDate[4] - 2,
        this.todayDate[5]
      ),
    },
    {
      account_id: 'bdbb3e56fas44f5f96741efc5edfb107',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'out',
      amount: 6700,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3] - 15,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2],
        this.todayDate[3] - 15,
        this.todayDate[4] - 5,
        this.todayDate[5]
      ),
    },
    {
      account_id: '22cb68ecadw32d7290174252f34be544',
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
      account_id: '5214bbfde2dc495ab27200f8f94b1b23',
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
      account_id: '42896dc47ccf4f1aa647275da02a9336',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: 'In',
      amount: 4200,
      iso_currency_code: 'USD',
      status: 'Processing',
      country: 'Italy',
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
        this.todayDate[2] - 5,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '22264f2fc92c471d881698e2f0920df6',
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
        this.todayDate[2] - 6,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 7,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '3ess3e6ae9b34cfb971ac14g422aa2cb',
      ref_id: '',
      transaction: 'Payment to Doug Mann',
      type_transaction: 'In',
      amount: 1620,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Poland',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 6,
        this.todayDate[3] - 7,
        this.todayDate[4] - 8,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 6,
        this.todayDate[3] - 8,
        this.todayDate[4] - 9,
        this.todayDate[5] - 2
      ),
    },
    {
      account_id: '22cb223sccc32d7b90175052f34be544',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'Out',
      amount: 3522,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 7,
        this.todayDate[3] + 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 7,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '5214bb22e2dc495ab27200f8f94b1b23',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: 'in',
      amount: 3112,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Italy',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3] + 1,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3] - 5,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'asdw6c0442b9479480d88d33dff444ce',
      ref_id: '',
      transaction: 'Payment to Doug Mann',
      type_transaction: 'In',
      amount: 1100,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Poland',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3] - 12,
        this.todayDate[4] - 1,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3] - 16,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '12323f2fc92c471d881698e2f0920das',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'Out',
      amount: 102,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3] - 20,
        this.todayDate[4],
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3] - 23,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '2264f2fc2371d881642e2f092sa46',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'In',
      amount: 1720,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3],
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1],
        this.todayDate[2] - 8,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '1e11ac6baf9b4f3ba2e157530c6e5136',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'in',
      amount: 7250,
      iso_currency_code: 'USD',
      status: 'Processing',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 1,
        this.todayDate[3] - 2,
        this.todayDate[4] - 6,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 3,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'bdbb3e56fas44f5f96741efc5edfb107',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'In',
      amount: 8750,
      iso_currency_code: 'USD',
      status: 'Processing',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 2,
        this.todayDate[2] - 5,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 2,
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '32896dc47ccf4f2aa647175da0c69336',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: 'Out',
      amount: 300,
      iso_currency_code: 'USD',
      status: 'Failed',
      country: 'Italy',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 3,
        this.todayDate[2] - 5,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 3,
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'd681203df9034dab97c2472c7622e3ba',
      ref_id: '',
      transaction: 'Payment from Hank Douglas',
      type_transaction: 'In',
      amount: 2000,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Finland',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 3,
        this.todayDate[2] - 5,
        this.todayDate[3] - 1,
        this.todayDate[4] - 2,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 4,
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },

    {
      account_id: '1e11ac6baf9b4f5ba2e157530a6e2136',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'in',
      amount: 4250,
      iso_currency_code: 'USD',
      status: 'Processing',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 6,
        this.todayDate[2] - 1,
        this.todayDate[3] - 2,
        this.todayDate[4] - 6,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 6,
        this.todayDate[2] - 3,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '2281203df9034dab97c2472c7622e3ba',
      ref_id: '',
      transaction: 'Payment from Hank Douglas',
      type_transaction: 'In',
      amount: 1000,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Finland',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 7,
        this.todayDate[2] - 5,
        this.todayDate[3] - 1,
        this.todayDate[4] - 2,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 7,
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '52cabbfdeasdc495ab272328f94b1b23',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: 'in',
      amount: 4212,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Italy',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 7,
        this.todayDate[2] - 9,
        this.todayDate[3] - 1,
        this.todayDate[4] - 2,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 7,
        this.todayDate[2] - 10,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '42896dc47ccf4f2aa647175da0c69336',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: 'Out',
      amount: 4400,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Italy',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 8,
        this.todayDate[2] - 5,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 8,
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '52cb68ee01c64d7b90175052f34be569',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'in',
      amount: 200,
      iso_currency_code: 'USD',
      status: 'Failed',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 9,
        this.todayDate[2] - 6,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 9,
        this.todayDate[2] - 6,
        this.todayDate[3] - 1,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '5864bbfde2dc495ab27200f8f94b1b23',
      ref_id: '',
      transaction: 'Added from account ****5555',
      type_transaction: 'in',
      amount: 1002,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Italy',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 4,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 5,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'asbb3e56c8d44f5f96741efc5edfb107',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'In',
      amount: 4214,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 6,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 7,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'bdbb3e56c8d44f5f96741efc5edfb217',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'out',
      amount: 1223,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 9,
        this.todayDate[2] - 2,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 9,
        this.todayDate[2] - 1,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: '59664f2fc92c471d441698e2f0920df6',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'In',
      amount: 750,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 5,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 6,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'dc0c6c0442b9479480d88d33dff424ce',
      ref_id: '',
      transaction: 'Payment to Doug Mann',
      type_transaction: 'in',
      amount: 1500,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Poland',
      authorized_date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 12,
        this.todayDate[3] - 2,
        this.todayDate[4] - 1,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0],
        this.todayDate[1] - 10,
        this.todayDate[2] - 15,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'a4cb68ee01c64asd90175052234bd569',
      ref_id: '',
      transaction: 'Payment from Hank Chase',
      type_transaction: 'in',
      amount: 3700,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'USA',
      authorized_date: new Date(
        this.todayDate[0] - 1,
        this.todayDate[1] - 9,
        this.todayDate[2] - 6,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0] - 1,
        this.todayDate[1] - 9,
        this.todayDate[2] - 6,
        this.todayDate[3] - 1,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'aadw3e56c8d44f5f96741efc5edfb107',
      ref_id: '',
      transaction: 'Payment to Erica Frost',
      type_transaction: 'In',
      amount: 4217,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'England',
      authorized_date: new Date(
        this.todayDate[0] - 2,
        this.todayDate[1] - 10,
        this.todayDate[2] - 6,
        this.todayDate[3] - 3,
        this.todayDate[4] - 4,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0] - 2,
        this.todayDate[1] - 10,
        this.todayDate[2] - 7,
        this.todayDate[3] - 2,
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
    {
      account_id: 'ad0c6c0a12b9479480d882a3dff424ce',
      ref_id: '',
      transaction: 'Payment to Doug Mann',
      type_transaction: 'in',
      amount: 2500,
      iso_currency_code: 'USD',
      status: 'Success',
      country: 'Poland',
      authorized_date: new Date(
        this.todayDate[0] - 2,
        this.todayDate[1] - 11,
        this.todayDate[2] - 12,
        this.todayDate[3] - 2,
        this.todayDate[4] - 1,
        this.todayDate[5]
      ),
      date: new Date(
        this.todayDate[0] - 2,
        this.todayDate[1] - 11,
        this.todayDate[2] - 15,
        this.todayDate[3],
        this.todayDate[4],
        this.todayDate[5]
      ),
    },
  ];
  getTransactions() {
    return this.transactions;
  }
  getLastTransactions(amount: number) {
    return this.transactions.slice(0, amount);
  }
  //WEEK
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
  //DAY
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
      hoursDates.push(
        `${dates[i].getHours()}:${
          dates[i].getMinutes() > 9
            ? dates[i].getMinutes()
            : '0' + dates[i].getMinutes()
        }`
      );
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
  //MONTHS
  getLastYearMonths() {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months;
  }
  getLastYearMonthFilter() {
    let date = new Date(this.todayDate[0], 0, 1, 0, 0, 0);
    let transaction = this.transactions.filter(
      (transaction) =>
        transaction.date >= date && transaction.status === 'Success'
    );
    return transaction;
  }
  getLastYearMonthTransaction() {
    let transactions = this.getLastYearMonthFilter();
    let monthly = {
      money: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      name: [],
    };
    let monthsName = this.getLastYearMonths();
    for (let i = 0; i < transactions.length; ++i) {
      let transactionMonth = transactions[i].date.getMonth();
      if (transactions[i].type_transaction.toLowerCase() === 'in')
        monthly.money[transactionMonth] =
          monthly.money[transactionMonth] + transactions[i].amount;
      else if (transactions[i].type_transaction.toLowerCase() === 'out')
        monthly.money[transactionMonth] =
          monthly.money[transactionMonth] - transactions[i].amount;
    }
    for (let i = 0; i < monthly.money.length; ++i) {
      if (monthly.money[i] !== 0) {
        monthly.name.push(monthsName[i]);
      }
    }
    monthly.money = monthly.money.filter((monthlyMoney) => monthlyMoney !== 0);
    return monthly;
  }
  //QUARTER
  getLastYearQuarterTransactions() {
    let monthly = this.getLastYearMonthTransaction();
    let quarterMoney: Array<number> = [0, 0, 0, 0];
    let quarterName: Array<string> = ['I', 'II', 'III', 'IV'];
    let monthsName = this.getLastYearMonths();
    let quarter = {
      quarterMoney: [],
      quarterName: [],
    };
    for (let i = 0; i < monthly.money.length; ++i) {
      if (
        monthly.name[i] === monthsName[0] ||
        monthly.name[i] === monthsName[1] ||
        monthly.name[i] === monthsName[2]
      ) {
        quarterMoney[0] = quarterMoney[0] + monthly.money[i];
      } else if (
        monthly.name[i] === monthsName[3] ||
        monthly.name[i] === monthsName[4] ||
        monthly.name[i] === monthsName[5]
      ) {
        quarterMoney[1] = quarterMoney[1] + monthly.money[i];
      } else if (
        monthly.name[i] === monthsName[6] ||
        monthly.name[i] === monthsName[7] ||
        monthly.name[i] === monthsName[8]
      ) {
        quarterMoney[2] = quarterMoney[2] + monthly.money[i];
      } else {
        quarterMoney[3] = quarterMoney[3] + monthly.money[i];
      }
    }
    quarterMoney.map((data, index) => {
      if (data !== 0) {
        quarter.quarterName.push(quarterName[index]);
      }
    });
    quarter.quarterMoney = quarterMoney.filter((data) => data !== 0);

    return quarter;
  }
  //YEARS
  getYearsTransaction() {
    let transactions = this.transactions.filter(
      (transaction) => transaction.status.toLowerCase() === 'success'
    );
    let lastTransactionYear = transactions[
      transactions.length - 1
    ].date.getFullYear();
    let firstTransactionYear = transactions[0].date.getFullYear();
    let years = Array(firstTransactionYear - lastTransactionYear + 1);
    let yearsData = {
      years: [],
      yearsName: [],
    };
    for (let i = 0; i < years.length; ++i) {
      years[i] = 0;
    }
    for (let i = 0; i < transactions.length; ++i) {
      let transactionYear =
        transactions[i].date.getFullYear() - lastTransactionYear;
      if (transactions[i].type_transaction.toLowerCase() === 'in')
        years[transactionYear] =
          years[transactionYear] + transactions[i].amount;
      else if (transactions[i].type_transaction.toLowerCase() === 'out')
        years[transactionYear] =
          years[transactionYear] - transactions[i].amount;
    }
    for (let i = 0; i < years.length; ++i) {
      if (years[i] !== 0) {
        yearsData.yearsName.push(`${i + lastTransactionYear}`);
      }
    }
    yearsData.years = years.filter((yearMoney) => yearMoney !== 0);
    return yearsData;
  }
  getDaysTransaction() {
    let dayOfMonth = new Date().getDate();
    let daysData = {
      daysMoney: [],
      daysName: [],
    };
    let transactions = this.transactions.filter(
      (transaction) =>
        transaction.status.toLowerCase() === 'success' &&
        transaction.date >
          new Date(
            this.todayDate[0],
            this.todayDate[1],
            this.todayDate[2] - dayOfMonth + 1,
            this.todayDate[3],
            this.todayDate[4],
            this.todayDate[5]
          )
    );

    for (let i = 0; i < dayOfMonth + 1; ++i) {
      daysData.daysMoney[i] = 0;
      daysData.daysName[i] = `${i}`;
    }
    for (let i = 0; i < transactions.length; ++i) {
      let transactionDate = this.transactions[i].date.getDate();
      if (transactions[i].type_transaction.toLowerCase() === 'in')
        daysData.daysMoney[transactionDate] =
          daysData.daysMoney[transactionDate] + transactions[i].amount;
      else if (transactions[i].type_transaction.toLowerCase() === 'out')
        daysData.daysMoney[transactionDate] =
          daysData.daysMoney[transactionDate] - transactions[i].amount;
    }
    daysData.daysMoney.splice(0, 1);
    daysData.daysName.splice(0, 1);
    // console.log(daysData);
    return daysData;
  }
}

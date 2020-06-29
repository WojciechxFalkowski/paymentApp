import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from './../models/transaction';
@Injectable({
  providedIn: 'root',
})
export class InputServiceService {
  // private inputValue = '';
  private inputVal = new BehaviorSubject<Array<Transaction>>([]);
  constructor() {}
  addValue(inputValue: Array<Transaction>) {
    this.inputVal.next(inputValue);
    // this.inputVal.subscribe((input) => console.log(input));
  }
  getValue(): Observable<Array<Transaction>> {
    return this.inputVal.asObservable();
  }
}

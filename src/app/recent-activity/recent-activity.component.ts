import { Component, OnInit } from '@angular/core';
import { Transtaction } from './../models/transaction';
@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css'],
})
export class RecentActivityComponent implements OnInit {
  transactions: Array<string> = [];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  accountBalance = 30659.45;
  pending = -19500.0;
  processed = 28750.0;
  constructor() {}

  ngOnInit(): void {}
}

import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import * as Chart from 'chart.js';
import { DataService } from './../../services/data.service';
import { Transaction } from './../../models/transaction';
@Component({
  selector: 'app-week-chart',
  templateUrl: './week-chart.component.html',
  styleUrls: ['./week-chart.component.css'],
})
export class WeekChartComponent implements OnInit, AfterViewInit {
  @ViewChild('weekChart__canvas') chart: ElementRef;

  weekdays: Array<string> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  canvas: any;
  ctx: any;
  weekMoney;
  transaction: Array<Transaction>;
  constructor(private dataService: DataService) {
    this.weekMoney = dataService.getLastWeekTransactionMoney();
  }
  ngOnInit() {}
  ngAfterViewInit(): void {
    this.canvas = this.chart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    const labels: Array<string> = [];
    for (let i = 1; i <= 7; ++i) {
      labels.push(
        this.weekdays[
          new Date(
            new Date().getTime() - 60 * 60 * 24 * 1000 * (7 - i)
          ).getDay()
        ]
      );
    }
    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Money',
            data: this.weekMoney,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Week',
          fontSize: 14,
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'rgb(255, 99, 132)',
          },
        },
        elements: {
          line: {
            tension: 0,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }
}

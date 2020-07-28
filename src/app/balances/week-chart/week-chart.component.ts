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
    // this.transaction = dataService.getTransactions();
    // console.log(dataService.getLastDayTransaction());
    this.weekMoney = dataService.getLastWeekTransactionMoney();
  }
  ngOnInit() {
    // let date = new Date();
    // let todayDate = [
    //   date.getFullYear(),
    //   date.getMonth(),
    //   date.getDate(),
    //   date.getHours(),
    //   date.getMinutes(),
    //   date.getSeconds(),
    // ];
    // console.log(new Date(2020, 6, 27, 22, 36, 4));
    // console.log(
    //   new Date(
    //     todayDate[0],
    //     todayDate[1],
    //     todayDate[2],
    //     todayDate[3],
    //     todayDate[4],
    //     todayDate[5]
    //   )
    // );
    // console.log(todayDate);
    // console.log(new Date(date[0], date[1], date[2], date[3], date[4], date[5]));
    // console.log(new Date(2020, 3, 28, 6, 10, 3));
  }
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
    // console.log(labels);
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
            tension: 0, // disables bezier curves
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}

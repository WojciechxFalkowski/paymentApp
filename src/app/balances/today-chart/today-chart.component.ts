import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import * as Chart from 'chart.js';
import { DataService } from './../../services/data.service';
@Component({
  selector: 'app-today-chart',
  templateUrl: './today-chart.component.html',
  styleUrls: ['./today-chart.component.css'],
})
export class TodayChartComponent implements OnInit, AfterViewInit {
  @ViewChild('todayChart__canvas') chart: ElementRef;
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
  todayMoney: Array<number>;
  todayDates: Array<string>;
  constructor(private dataService: DataService) {
    this.todayMoney = dataService.getLastDayTransaction();
    this.todayDates = dataService.getLastDayHours();
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
        labels: this.todayDates,
        datasets: [
          {
            label: 'Money',
            data: this.todayMoney,
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Last 24 hours',
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

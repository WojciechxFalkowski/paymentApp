import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { Transaction } from './../models/transaction';
import * as Chart from 'chart.js';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit, AfterViewInit {
  doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  doughnutChartData = [120, 150, 180, 90];
  doughnutChartType = 'doughnut';
  monthly;
  quarterMoney;
  yearsData;
  daysData;
  months;
  screenHeight: number;
  screenWidth: number;

  constructor(private dataService: DataService) {
    this.monthly = dataService.getLastYearMonthTransaction();
    this.quarterMoney = dataService.getLastYearQuarterTransactions();
    this.yearsData = dataService.getYearsTransaction();
    this.daysData = dataService.getDaysTransaction();
    this.months = dataService.getLastYearMonths();
  }

  date = new Date();
  todayDate = [
    this.date.getFullYear(),
    this.date.getMonth(),
    this.date.getDate(),
    this.date.getHours(),
    this.date.getMinutes(),
    this.date.getSeconds(),
  ];
  @ViewChild('barchart__canvas__days') chartDays: ElementRef;
  @ViewChild('piechart__canvas') chart: ElementRef;
  @ViewChild('piechart__canvas__quarter') chartQuarter: ElementRef;
  @ViewChild('piechart__canvas__year') chartYear: ElementRef;
  canvas: any;
  ctx: any;

  ngAfterViewInit(): void {
    this.canvas = this.chartDays.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',

      data: {
        labels: this.daysData.daysName,
        datasets: [
          {
            data: this.daysData.daysMoney,
            backgroundColor: function (context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value < 0
                ? 'rgba(230, 25, 75, 0.5)'
                : index % 2
                ? 'rgba(0, 130, 200, 0.5)'
                : 'rgba(0, 200,130 , 0.5)';
            },

            borderColor: function (context) {
              var index = context.dataIndex;
              var value = context.dataset.data[index];
              return value < 0 ? 'red' : index % 2 ? 'blue' : 'green';
            },
            borderWidth: 1,
            hoverBackgroundColor: [],
            hoverBorderColor: [],
            hoverBorderWidth: 3,
            weight: 1,
          },
        ],
      },

      options: {
        title: {
          display: true,
          text: this.months[new Date().getMonth()],
        },
        legend: {
          display: false,
          labels: {},
        },
      },
    });

    this.canvas = this.chart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',

      data: {
        labels: this.monthly.name,
        datasets: [
          {
            data: this.monthly.money,
            backgroundColor: [
              'rgba(230, 25, 75, 0.2)',
              'rgba(245, 130, 48, 0.2)',
              'rgba(255, 225, 25, 0.2)',
              'rgba(210, 245,60, 0.2)',
              'rgba(60, 180, 75, 0.2)',
              'rgba(70, 240, 75, 0.2)',
              'rgba(0, 130, 200, 0.2)',
              'rgba(0, 0, 128, 0.2)',
              'rgba(145, 30, 180, 0.2)',
              'rgba(240, 30, 180, 0.2)',
              'rgba(128, 128, 128, 0.2)',
              'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
              'rgba(230, 25, 75, 0.8)',
              'rgba(245, 130, 48, 0.8)',
              'rgba(255, 225, 25, 0.8)',
              'rgba(210, 245,60,0.8)',
              'rgba(60, 180, 75, 0.8)',
              'rgba(70, 240, 75,0.8)',
              'rgba(0, 130, 200,0.8)',
              'rgba(0, 0, 128, 0.8)',
              'rgba(145, 30, 180, 0.8)',
              'rgba(240, 30, 180, 0.8)',
              'rgba(128, 128, 128, 0.8)',
              'rgba(0, 0, 0, 0.8)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              'rgba(230, 25, 75, 0.5)',
              'rgba(245, 130, 48, 0.5)',
              'rgba(255, 225, 25, 0.5)',
              'rgba(210, 245,60, 0.5)',
              'rgba(60, 180, 75, 0.5)',
              'rgba(70, 240, 75, 0.5)',
              'rgba(0, 130, 200, 0.5)',
              'rgba(0, 0, 128, 0.5)',
              'rgba(145, 30, 180, 0.5)',
              'rgba(240, 30, 180, 0.5)',
              'rgba(128, 128, 128, 0.5)',
              'rgba(0, 0, 0, 0.5)',
            ],
            hoverBorderColor: [
              'rgba(230, 25, 75, 1)',
              'rgba(245, 130, 48, 1)',
              'rgba(255, 225, 25, 1)',
              'rgba(210, 245,60,1)',
              'rgba(60, 180, 75, 1)',
              'rgba(70, 240, 75,1)',
              'rgba(0, 130, 200,1)',
              'rgba(0, 0, 128, 1)',
              'rgba(145, 30, 180, 1)',
              'rgba(240, 30, 180, 1)',
              'rgba(128, 128, 128, 1)',
              'rgba(0, 0, 0, 1)',
            ],
            hoverBorderWidth: 3,
            weight: 1, //default
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
      },
      //full option only changed animateScale on true
      options: {
        title: {
          display: false,
          text: 'Monthly balance',
        },
        cutoutPercentage: 0,
        rotation: -0.5 * Math.PI,
        circumference: 2 * Math.PI,
        animation: {
          animateRotate: true,
          animateScale: true,
        },
      },
    });
    this.canvas = this.chartQuarter.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',

      data: {
        labels: this.quarterMoney.quarterName,
        datasets: [
          {
            data: this.quarterMoney.quarterMoney,
            backgroundColor: [
              'rgba(230, 25, 75,0.2)',
              'rgba(210, 245,60, 0.2)',
              'rgba(0, 130, 200, 0.2)',
              'rgba(240, 30, 180, 0.2)',
              ,
            ],
            borderColor: [
              'rgba(230, 25, 75, 0.8)',
              'rgba(210, 245,60,0.8)',
              'rgba(0, 130, 200,0.8)',
              'rgba(240, 30, 180, 0.8)',
              ,
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              'rgba(230, 25, 75, 0.5)',
              'rgba(210, 245,60, 0.5)',
              'rgba(0, 130, 200, 0.5)',
              'rgba(0, 0, 0, 0.5)',
            ],
            hoverBorderColor: [
              'rgba(230, 25, 75, 1)',

              'rgba(210, 245,60,1)',

              'rgba(0, 130, 200,1)',

              'rgba(0, 0, 0, 1)',
            ],
            hoverBorderWidth: 3,
            weight: 1, //default
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
      },
      //full option only changed animateScale on true
      options: {
        title: {
          display: false,
          text: 'Quarterly balance',
        },
        cutoutPercentage: 0,
        rotation: -0.5 * Math.PI,
        circumference: 2 * Math.PI,
        animation: {
          animateRotate: true,
          animateScale: true,
        },
      },
    });
    this.canvas = this.chartYear.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',

      data: {
        labels: this.yearsData.yearsName,
        datasets: [
          {
            data: this.yearsData.years,
            backgroundColor: [
              'rgba(230, 25, 75, 0.2)',
              'rgba(245, 130, 48, 0.2)',
              'rgba(255, 225, 25, 0.2)',
              'rgba(210, 245,60, 0.2)',
              'rgba(60, 180, 75, 0.2)',
              'rgba(70, 240, 75, 0.2)',
              'rgba(0, 130, 200, 0.2)',
              'rgba(0, 0, 128, 0.2)',
              'rgba(145, 30, 180, 0.2)',
              'rgba(240, 30, 180, 0.2)',
              'rgba(128, 128, 128, 0.2)',
              'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
              'rgba(230, 25, 75, 0.8)',
              'rgba(245, 130, 48, 0.8)',
              'rgba(255, 225, 25, 0.8)',
              'rgba(210, 245,60,0.8)',
              'rgba(60, 180, 75, 0.8)',
              'rgba(70, 240, 75,0.8)',
              'rgba(0, 130, 200,0.8)',
              'rgba(0, 0, 128, 0.8)',
              'rgba(145, 30, 180, 0.8)',
              'rgba(240, 30, 180, 0.8)',
              'rgba(128, 128, 128, 0.8)',
              'rgba(0, 0, 0, 0.8)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: [
              'rgba(230, 25, 75, 0.5)',
              'rgba(245, 130, 48, 0.5)',
              'rgba(255, 225, 25, 0.5)',
              'rgba(210, 245,60, 0.5)',
              'rgba(60, 180, 75, 0.5)',
              'rgba(70, 240, 75, 0.5)',
              'rgba(0, 130, 200, 0.5)',
              'rgba(0, 0, 128, 0.5)',
              'rgba(145, 30, 180, 0.5)',
              'rgba(240, 30, 180, 0.5)',
              'rgba(128, 128, 128, 0.5)',
              'rgba(0, 0, 0, 0.5)',
            ],
            hoverBorderColor: [
              'rgba(230, 25, 75, 1)',
              'rgba(245, 130, 48, 1)',
              'rgba(255, 225, 25, 1)',
              'rgba(210, 245,60,1)',
              'rgba(60, 180, 75, 1)',
              'rgba(70, 240, 75,1)',
              'rgba(0, 130, 200,1)',
              'rgba(0, 0, 128, 1)',
              'rgba(145, 30, 180, 1)',
              'rgba(240, 30, 180, 1)',
              'rgba(128, 128, 128, 1)',
              'rgba(0, 0, 0, 1)',
            ],
            hoverBorderWidth: 3,
            weight: 1, //default
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
      },
      //full option only changed animateScale on true
      options: {
        title: {
          display: false,
          text: 'Yearly balance',
        },
        cutoutPercentage: 0,
        rotation: -0.5 * Math.PI,
        circumference: 2 * Math.PI,
        animation: {
          animateRotate: true,
          animateScale: true,
        },
      },
    });
  }
  ngOnInit(): void {}
}

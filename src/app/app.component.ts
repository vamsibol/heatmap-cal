import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'heatmap-cal';
  array = {
    data: [
      { year: 2022, month: 1, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 13, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 20, sales_amount: 201196.0 },
      { year: 2022, month: 1, day: 21, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 22, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 25, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 26, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 27, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 29, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 1, day: 31, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 4, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 7, sales_amount: 1432.0 },
      { year: 2022, month: 2, day: 8, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 9, sales_amount: 3199.0 },
      { year: 2022, month: 2, day: 10, sales_amount: 11229.0 },
      { year: 2022, month: 2, day: 11, sales_amount: 1500.0 },
      { year: 2022, month: 2, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 13, sales_amount: 245.0 },
      { year: 2022, month: 2, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 15, sales_amount: 1200.0 },
      { year: 2022, month: 2, day: 16, sales_amount: 21.0 },
      { year: 2022, month: 2, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 19, sales_amount: 200.0 },
      { year: 2022, month: 2, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 21, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 22, sales_amount: 1141.0 },
      { year: 2022, month: 2, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 24, sales_amount: 121.0 },
      { year: 2022, month: 2, day: 25, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 26, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 27, sales_amount: 0.0 },
      { year: 2022, month: 2, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 1, sales_amount: 1600.0 },
      { year: 2022, month: 3, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 4, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 7, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 8, sales_amount: 200.0 },
      { year: 2022, month: 3, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 13, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 15, sales_amount: 300.0 },
      { year: 2022, month: 3, day: 16, sales_amount: 5387.0 },
      { year: 2022, month: 3, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 21, sales_amount: 12662.0 },
      { year: 2022, month: 3, day: 22, sales_amount: 942.0 },
      { year: 2022, month: 3, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 24, sales_amount: 5153.0 },
      { year: 2022, month: 3, day: 25, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 26, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 27, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 28, sales_amount: 18913.0 },
      { year: 2022, month: 3, day: 29, sales_amount: 1101.0 },
      { year: 2022, month: 3, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 3, day: 31, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 4, sales_amount: 614.0 },
      { year: 2022, month: 4, day: 5, sales_amount: 43144.0 },
      { year: 2022, month: 4, day: 6, sales_amount: 3816.0 },
      { year: 2022, month: 4, day: 7, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 8, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 13, sales_amount: 7642.0 },
      { year: 2022, month: 4, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 21, sales_amount: 100.0 },
      { year: 2022, month: 4, day: 22, sales_amount: 35970.0 },
      { year: 2022, month: 4, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 25, sales_amount: 5199.0 },
      { year: 2022, month: 4, day: 26, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 27, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 29, sales_amount: 0.0 },
      { year: 2022, month: 4, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 4, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 7, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 8, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 13, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 21, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 22, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 25, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 26, sales_amount: 500.0 },
      { year: 2022, month: 5, day: 27, sales_amount: 2000.0 },
      { year: 2022, month: 5, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 29, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 5, day: 31, sales_amount: 700.0 },
      { year: 2022, month: 6, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 2, sales_amount: 250.0 },
      { year: 2022, month: 6, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 4, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 7, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 8, sales_amount: 100.0 },
      { year: 2022, month: 6, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 13, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 21, sales_amount: 10.0 },
      { year: 2022, month: 6, day: 22, sales_amount: 3500.0 },
      { year: 2022, month: 6, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 25, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 26, sales_amount: null },
      { year: 2022, month: 6, day: 27, sales_amount: null },
      { year: 2022, month: 6, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 29, sales_amount: 0.0 },
      { year: 2022, month: 6, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 1, sales_amount: 620.0 },
      { year: 2022, month: 7, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 4, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 5, sales_amount: 2660.0 },
      { year: 2022, month: 7, day: 6, sales_amount: 157.0 },
      { year: 2022, month: 7, day: 7, sales_amount: 70.0 },
      { year: 2022, month: 7, day: 8, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 13, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 14, sales_amount: 11.0 },
      { year: 2022, month: 7, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 18, sales_amount: 100.0 },
      { year: 2022, month: 7, day: 19, sales_amount: 1135.0 },
      { year: 2022, month: 7, day: 20, sales_amount: 1131.0 },
      { year: 2022, month: 7, day: 21, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 22, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 25, sales_amount: 10011193.0 },
      { year: 2022, month: 7, day: 26, sales_amount: 197364734.0 },
      { year: 2022, month: 7, day: 27, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 29, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 7, day: 31, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 1, sales_amount: 100.0 },
      { year: 2022, month: 8, day: 2, sales_amount: 760.0 },
      { year: 2022, month: 8, day: 3, sales_amount: 12123.0 },
      { year: 2022, month: 8, day: 4, sales_amount: 345.0 },
      { year: 2022, month: 8, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 7, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 8, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 9, sales_amount: 65788828.0 },
      { year: 2022, month: 8, day: 10, sales_amount: 33.0 },
      { year: 2022, month: 8, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 13, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 17, sales_amount: 1131.0 },
      { year: 2022, month: 8, day: 18, sales_amount: 330.0 },
      { year: 2022, month: 8, day: 19, sales_amount: 1410.0 },
      { year: 2022, month: 8, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 21, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 22, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 23, sales_amount: 5.0 },
      { year: 2022, month: 8, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 25, sales_amount: 210.0 },
      { year: 2022, month: 8, day: 26, sales_amount: 7.0 },
      { year: 2022, month: 8, day: 27, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 8, day: 29, sales_amount: 20.0 },
      { year: 2022, month: 8, day: 30, sales_amount: 4.0 },
      { year: 2022, month: 8, day: 31, sales_amount: 100.0 },
      { year: 2022, month: 9, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 4, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 7, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 8, sales_amount: 93.0 },
      { year: 2022, month: 9, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 12, sales_amount: 1237.0 },
      { year: 2022, month: 9, day: 13, sales_amount: 37036998.0 },
      { year: 2022, month: 9, day: 14, sales_amount: 1.0 },
      { year: 2022, month: 9, day: 15, sales_amount: 4.0 },
      { year: 2022, month: 9, day: 16, sales_amount: 333.0 },
      { year: 2022, month: 9, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 21, sales_amount: 1340.0 },
      { year: 2022, month: 9, day: 22, sales_amount: 200.0 },
      { year: 2022, month: 9, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 25, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 26, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 27, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 9, day: 29, sales_amount: 116.78 },
      { year: 2022, month: 9, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 4, sales_amount: 10.0 },
      { year: 2022, month: 10, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 6, sales_amount: 2.0 },
      { year: 2022, month: 10, day: 7, sales_amount: 2413.0 },
      { year: 2022, month: 10, day: 8, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 9, sales_amount: null },
      { year: 2022, month: 10, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 11, sales_amount: 2113.78 },
      { year: 2022, month: 10, day: 12, sales_amount: 450.0 },
      { year: 2022, month: 10, day: 13, sales_amount: 1.0 },
      { year: 2022, month: 10, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 18, sales_amount: 1100.0 },
      { year: 2022, month: 10, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 21, sales_amount: null },
      { year: 2022, month: 10, day: 22, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 24, sales_amount: null },
      { year: 2022, month: 10, day: 25, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 26, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 27, sales_amount: 2.0 },
      { year: 2022, month: 10, day: 28, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 29, sales_amount: 0.0 },
      { year: 2022, month: 10, day: 30, sales_amount: null },
      { year: 2022, month: 10, day: 31, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 2, sales_amount: 397.0 },
      { year: 2022, month: 11, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 4, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 5, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 7, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 8, sales_amount: 700.0 },
      { year: 2022, month: 11, day: 9, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 11, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 12, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 13, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 14, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 17, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 18, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 19, sales_amount: 1001.0 },
      { year: 2022, month: 11, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 21, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 22, sales_amount: null },
      { year: 2022, month: 11, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 24, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 25, sales_amount: 100.0 },
      { year: 2022, month: 11, day: 26, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 27, sales_amount: null },
      { year: 2022, month: 11, day: 28, sales_amount: 2666.0 },
      { year: 2022, month: 11, day: 29, sales_amount: 0.0 },
      { year: 2022, month: 11, day: 30, sales_amount: null },
      { year: 2022, month: 12, day: 1, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 2, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 3, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 4, sales_amount: null },
      { year: 2022, month: 12, day: 5, sales_amount: 113.78 },
      { year: 2022, month: 12, day: 6, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 7, sales_amount: null },
      { year: 2022, month: 12, day: 8, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 9, sales_amount: 1475.0 },
      { year: 2022, month: 12, day: 10, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 11, sales_amount: null },
      { year: 2022, month: 12, day: 12, sales_amount: 7750.0 },
      { year: 2022, month: 12, day: 13, sales_amount: 1322.0 },
      { year: 2022, month: 12, day: 14, sales_amount: 100.0 },
      { year: 2022, month: 12, day: 15, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 16, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 17, sales_amount: null },
      { year: 2022, month: 12, day: 18, sales_amount: null },
      { year: 2022, month: 12, day: 19, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 20, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 21, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 22, sales_amount: 1000.0 },
      { year: 2022, month: 12, day: 23, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 24, sales_amount: null },
      { year: 2022, month: 12, day: 25, sales_amount: null },
      { year: 2022, month: 12, day: 26, sales_amount: 5500.0 },
      { year: 2022, month: 12, day: 27, sales_amount: 2500.0 },
      { year: 2022, month: 12, day: 28, sales_amount: 4986.98 },
      { year: 2022, month: 12, day: 29, sales_amount: 2200.0 },
      { year: 2022, month: 12, day: 30, sales_amount: 0.0 },
      { year: 2022, month: 12, day: 31, sales_amount: 0.0 },
      { year: 2023, month: 1, day: 1, sales_amount: 0.0 },
      { year: 2023, month: 1, day: 2, sales_amount: 0.0 },
      { year: 2023, month: 1, day: 3, sales_amount: 4012356844.0 },
      { year: 2023, month: 1, day: 4, sales_amount: 115.98 },
      { year: 2023, month: 1, day: 5, sales_amount: 200.0 },
      { year: 2023, month: 1, day: 6, sales_amount: null },
      { year: 2023, month: 1, day: 7, sales_amount: null },
      { year: 2023, month: 1, day: 8, sales_amount: null },
      { year: 2023, month: 1, day: 9, sales_amount: null },
      { year: 2023, month: 1, day: 10, sales_amount: null },
    ],
  };
  ngAfterViewInit() {
    var cal = new (window as any).CalHeatMap();
    let currentYear = 2023;
    let currentMonth = 0;
    let minColor = '#382c2d';
    let maxColor = '#fd591f';
    let max = 4012356844;
    let valueparameter = 'sales_amount';
    var parser = function (array: any) {
      var stats: any = {};
      for (var d in array) {
        if (array.hasOwnProperty(d)) {
          array[d].date =
            array[d].month + '/' + array[d].day + '/' + array[d].year;
          array[d].date = moment(moment(array[d].date, 'MM/DD/YYYY').unix()).valueOf();
          stats[array[d].date] = array[d][valueparameter];
        }
      }
      return stats;
    };

    cal.init({
      itemSelector: '#example-b',
      width: '500px',
      domain: 'month',
      subDomain: 'day',
      domainMargin: [0, 0, 5, 0],
      start: new Date(2023 - 1, 0 + 1),
      maxDate: new Date(currentYear, currentMonth),
      range: 12,
      data: this.array.data,
      afterLoadData: parser,
      label: {
        color: '#F3F3F3',
      },
      cellRadius: 100,
      itemName: 'in sales',
      legendHorizontalPosition: 'center',
      legend: [
        parseInt((max / 4).toString()),
        parseInt((max / 3).toString()),
        parseInt((max / 2).toString()),
        parseInt(max.toString()),
      ],
      legendColors: {
        min: minColor,
        max: maxColor,
        empty: '#43474F',
      },
    });
  }
}

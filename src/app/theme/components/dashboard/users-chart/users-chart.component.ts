import { Component, OnInit } from '@angular/core';
import { single } from './users-chart.data';


@Component({
  selector: 'app-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {

  public single: any[];

  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = false;
  // public xAxisLabel = 'Lượng người sử dụng theo thời gian';
  public showYAxisLabel = true;
  public yAxisLabel = '';
  public colorScheme = {
    domain: ['#416897', '#ff0000', '#143664', '#0096A6', '#F47B00', '#606060','#00fcbd','#ba7966','#e00bb5','#00ff37','#ff006a','#f6ff00']
  };

  constructor() {
    Object.assign(this, {single});
  }

  ngOnInit() {
  }

}

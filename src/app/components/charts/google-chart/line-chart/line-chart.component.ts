import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class LineChartComponent implements OnInit {

  public lineChart =  chartData.lineChart
 
  constructor() { }

  ngOnInit(): void {
  }

}

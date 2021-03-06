import { Component, OnInit, ViewChild  } from "@angular/core";
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({

    selector: 'statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css',
    '../../css/neumorphism.component.css',]

})
export class StatisticsComponent {
  value = 100;

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    public barChartOptions: ChartConfiguration['options'] = {
      elements: {
        line: {
          tension: 0.4
        }
      },
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {},
        y: {
          min: 10
        }
      },
      plugins: {
        legend: { display: true },
      }
    };

    public barChartLabels: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
    public barChartType: ChartType = 'bar';
  
    public barChartData: ChartData<'bar'> = {
      labels: this.barChartLabels,
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
      ]
    };
  
    // events
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }
  
    public randomize(): void {
      this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
    }

}

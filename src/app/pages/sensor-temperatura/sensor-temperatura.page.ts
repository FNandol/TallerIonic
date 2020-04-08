import { Component, OnInit, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sensor-temperatura',
  templateUrl: './sensor-temperatura.page.html',
  styleUrls: ['./sensor-temperatura.page.scss'],
})
export class SensorTemperaturaPage implements OnInit{

  bars: Chart;
  constructor(private barChart: ElementRef) { }

  ngOnInit () {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart( this.barChart.nativeElement.querySelector('#lineCanvas'), {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [{
          label: 'Temperatura estandar del dia',
          data: [35, 23, 21, 39, 30, 25, 26, 24],
          backgroundColor: 'rgb(0, 0, 0)', // color area
          borderColor: 'rgb(255, 121, 34)',// color linea
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}

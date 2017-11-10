import { Component, OnInit } from '@angular/core';
import { Widget } from '../../widget.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent extends Widget {

  constructor() {
    super();
  }

  updateWidget(obj: any) {
    throw new Error("Method not implemented.");
  }
}

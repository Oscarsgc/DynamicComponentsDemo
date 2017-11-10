import { Component, OnInit } from '@angular/core';
import { Widget } from '../../widget.component';

@Component({
  selector: 'lineChart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends Widget {

  constructor() {
    super();
  }

  updateWidget(obj: any) {
    throw new Error("Method not implemented.");
  }
}

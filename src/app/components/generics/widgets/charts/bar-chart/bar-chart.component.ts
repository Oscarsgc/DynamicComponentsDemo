import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpService } from '../../../../../services/http.service';
import { Widget } from '../../widget.component';

@Component({
  selector: 'barChart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent extends Widget {

  constructor() {
    super();
  }

  updateWidget(obj: any) {
    throw new Error("Method not implemented.");
  }

}

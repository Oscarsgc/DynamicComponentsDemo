import { Component, OnInit } from '@angular/core';
import { Widget } from '../../widget.component';
import { HttpService } from '../../../../../services/http.service';

@Component({
  selector: 'lineChart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends Widget {

  constructor(httpService: HttpService) {
    super(httpService);
  }

}

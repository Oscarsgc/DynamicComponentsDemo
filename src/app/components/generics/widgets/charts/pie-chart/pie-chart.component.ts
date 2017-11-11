import { Component, OnInit } from '@angular/core';
import { Widget } from '../../widget.component';
import { HttpService } from '../../../../../services/http.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent extends Widget {

  constructor(httpService: HttpService) {
    super(httpService);
  }
}

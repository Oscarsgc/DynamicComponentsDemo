import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { GenericDashboard } from '../genericDashboard.component';
import { HttpService } from '../../../../services/http.service';
import { BarChartComponent } from '../../../generics/widgets/charts/bar-chart/bar-chart.component';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [BarChartComponent],
  providers: [HttpService]
})

export class DashboardComponent extends GenericDashboard implements OnInit {

  constructor(httpService: HttpService, componentFactoryResolver: ComponentFactoryResolver) {
    super(httpService, componentFactoryResolver);
  }

  ngOnInit() {
    this.dashboardId = 1;
    this.refresh();
  }



}

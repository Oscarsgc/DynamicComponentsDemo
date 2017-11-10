import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { GenericDashboard } from '../genericDashboard.component';
import { HttpService } from '../../../../services/http.service';
import { BarChartComponent } from '../../../generics/widgets/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../../generics/widgets/charts/line-chart/line-chart.component';
import { PieChartComponent } from '../../../generics/widgets/charts/pie-chart/pie-chart.component';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [BarChartComponent, LineChartComponent, PieChartComponent],
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

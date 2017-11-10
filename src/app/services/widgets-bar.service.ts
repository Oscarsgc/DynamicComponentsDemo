import { Injectable } from '@angular/core';

@Injectable()
export class WidgetsBarService {

  getWidgets() {
    return [
      { widget: "pieChart", name: "Pie Chart", logo: "../assets/images/widgetsBar/pieChart.svg" },
      { widget: "lineChart", name: "Line Chart", logo: "../assets/images/widgetsBar/lineChart.svg" },
      { widget: "multiBarChart", name: "Bar Chart", logo: "../assets/images/widgetsBar/barChart.svg" }
    ];
  }
}


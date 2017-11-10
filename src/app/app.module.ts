import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/views/layouts/header/header.component';
import { FooterComponent } from './components/views/layouts/footer/footer.component';
import { WidgetsBarComponent } from './components/views/widgets-bar/widgets-bar.component';
import { WidgetsBarService } from './services/widgets-bar.service';
import { WidgetCmpt } from './components/views/dashboard/widget.component';
import { DashboardComponent } from './components/views/dashboard/exampleDashboard/dashboard.component';
import { HttpService } from './services/http.service';
import { BarChartComponent } from './components/generics/widgets/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/generics/widgets/charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/generics/widgets/charts/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    WidgetsBarComponent,

    // Widgets
    WidgetCmpt,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpService,
    WidgetsBarService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  static withComponents(components: any[]) {
    return {
      ngModule: AppModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
      ]
    }
  }
}


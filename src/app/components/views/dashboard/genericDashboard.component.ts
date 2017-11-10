import { ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { element } from "protractor";
import { BarChartComponent } from "../../generics/widgets/charts/bar-chart/bar-chart.component";
import { PieChartComponent } from "../../generics/widgets/charts/pie-chart/pie-chart.component";
import { LineChartComponent } from "../../generics/widgets/charts/line-chart/line-chart.component";

export abstract class GenericDashboard {
    protected widgets: any = [];
    protected dashboardId: number;
    protected columnWidth: string;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected viewContainerRef: ViewContainerRef;
    protected httpService: HttpService;
    private availableWidgets: any = [
        { key: "pieChart", value: PieChartComponent },
        { key: "lineChart", value: LineChartComponent },
        { key: "multiBarChart", value: BarChartComponent }
    ]

    constructor(httpService: HttpService, componentFactoryResolver: ComponentFactoryResolver) {
        this.httpService = httpService;
        this.componentFactoryResolver = componentFactoryResolver;
    }

    protected refresh() {
        let url = "http://localhost:3000/widgets?dashboardId="
        this.httpService.get(url + this.dashboardId).subscribe(response => {
            this.columnWidth = this.calculateWidth(response.length);
            this.widgets = [];
            this.buildWidgets(response);
        });
    }

    public createWidget(item: any) {
        this.getWidget(item.widget, (type: any) => {
            this.buildComponent(type);
        });
        this.refresh();
    }

    private getWidget(widgetType: any, callback: any) {
        this.availableWidgets.forEach(element => {
            if (element.key === widgetType)
                callback(element);
        })
    }

    private buildWidgets(components: any) {
        let splitComponents: any = [];
        components.forEach((element: any) => {
            this.getWidget(element.content.widgetType, (component: any) => {
                let widget: any = {
                    widgetId: element.id,
                    component: component.value,
                    dashboardId: element.dashboardId,
                    content: element.content
                };
                splitComponents.push(widget);
            });
        });
        splitComponents.forEach((element: any) => {
            this.widgetCreator(element);
        })
    }

    private buildComponent(widget: any) {
        let object: any;
        switch (widget.key) {
            default:
                object = this.buildChartWidget(widget);
                break;
        }
        this.widgetCreator(object);
        this.storeWidget(object);
    }

    private buildChartWidget(widget: any) {
        return {
            widgetId: this.generateId(),
            dashboardId: this.dashboardId,
            component: widget.value,
            content: {
                title: "New Chart Widget",
                widgetType: widget.key
            }
        }
    }

    private widgetCreator(element: any) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(element.component);
        let component: any = componentFactory.componentType;
        this.widgets.push({ component: component, data: element });
    }

    private storeWidget(object: any) {
        let widget = {
            id: object.widgetId,
            dashboardId: object.dashboardId,
            content: object.content
        }
        let url = "http://localhost:3000/widgets/"
        this.httpService.post(url, widget).subscribe(response => {
            this.refresh();
        });
    }

    protected calculateWidth(items: number) {
        var localWidthPlugin = 2;
        var availableWidths = ["col-md-12", "col-md-6", "col-md-4", "col-md-3"];
        if (items >= localWidthPlugin) {
            return availableWidths[localWidthPlugin - 1];
        }
        return availableWidths[items - 1];
    }

    deleteWidget(widgetObj: any) {
        let widget = this.widgets.filter(item => item.data.widgetId == widgetObj._component.widgetId)[0]
        let index = this.widgets.indexOf(widget);
        if (index > -1) {
            this.widgets.splice(index, 1);
        }
        let url = "http://localhost:3000/widgets/" + widgetObj._component.widgetId;
        this.httpService.delete(url).subscribe(response => {
            this.refresh();
        });
    }

    generateId() {
        return Math.floor(Math.random() * 100000) + 100;
    }
}
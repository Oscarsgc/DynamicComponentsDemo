import { Component, Input, ViewContainerRef, OnInit, Output, ComponentFactoryResolver, EventEmitter } from "@angular/core";

@Component({
    selector: 'widget-component',
    template: ''
})
export class WidgetCmpt implements OnInit {
    @Input() widgetType: any;
    @Input() widgetObj: any;
    @Output() deleteWidget = new EventEmitter();
    @Input() data: any;

    constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widgetType);
        let componentRef: any = this.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.widgetObj = componentRef;
        componentRef.instance.content = this.data.content;
        componentRef.instance.dashboardId = this.data.dashboardId;
        componentRef.instance.widgetId = this.data.widgetId;
        componentRef.instance.deleteWidget.subscribe((data: any) => {
            this.deleteWidget.emit(data);
        });
    }
}
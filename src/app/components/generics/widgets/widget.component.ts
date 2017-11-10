import { Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

export abstract class Widget {
    @Input() content: any;
    @Input() widgetObj: any;
    @Input() dashboardId: any;
    @Input() widgetId: any;
    @Output() deleteWidget = new EventEmitter();
    protected subscription: Subscription;
    protected options: any;

    constructor() {
    }

    abstract updateWidget(obj: any): any;

    protected delete() {
        this.deleteWidget.emit(this.widgetObj);
    }

    protected heightCalculation() {
        let colsQty = 2;
        var value = 450;
        switch (colsQty) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                value = 400;
                break;
            case 4:
                value = 350;
                break;
        }
        return value;
    }
}
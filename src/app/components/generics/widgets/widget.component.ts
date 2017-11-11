import { Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpService } from "../../../services/http.service";

export abstract class Widget {
    @Input() content: any;
    @Input() widgetObj: any;
    @Input() dashboardId: any;
    @Input() widgetId: any;
    @Output() deleteWidget = new EventEmitter();
    protected subscription: Subscription;
    protected options: any;

    constructor(private httpService: HttpService) {
    }

    protected update() {
        let widget = {
            id: this.widgetObj._component.widgetId,
            dashboardId: this.widgetObj._component.dashboardId,
            content: this.widgetObj._component.content
        }
        let url = "http://localhost:3000/api/widgets/" + widget.id;
        this.httpService.put(url, widget).subscribe(response => {
        });
    }

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
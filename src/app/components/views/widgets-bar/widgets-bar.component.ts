import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WidgetsBarService } from '../../../services/widgets-bar.service';

@Component({
  selector: 'widgets-bar',
  templateUrl: './widgets-bar.component.html',
  styleUrls: ['./widgets-bar.component.css']
})
export class WidgetsBarComponent implements OnInit {
  @Input() widgetsList: any = [];
  @Output() createWidget = new EventEmitter();

  constructor(private widgetsBarService: WidgetsBarService) { }

  ngOnInit() {
    this.widgetsList = this.widgetsBarService.getWidgets();
  }

  clickedIcon(item: any) {
    this.createWidget.emit(item);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionListComponent implements OnInit {
  @Input() options: any[];
  @Input() preselected: any[];
  @Output() valueSelected = new EventEmitter;
  selected;

  constructor() { }

  ngOnInit() {
  }

  isSelected(option: any): boolean {
    let result: boolean;
    result = false;
    if (this.preselected.indexOf(option) > -1) {
      result = true;
    }
    return result;
  }

  selectionChange(event) {
    for (const group of this.preselected) {
      const selectedIndex = event.indexOf(group);
      if (selectedIndex === -1) {
        event.push(group);
      }
    }
    this.valueSelected.emit(event);
  }
}

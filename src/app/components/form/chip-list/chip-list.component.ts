import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})

export class ChipListComponent implements OnInit {
  @Input() word: string;
  @Input() elements: any[];
  @Input() removable: boolean;
  @Input() selectable: boolean;
  @Input() selected: boolean;
  @Input() width: string;
  @Output() removedElement = new EventEmitter;
  @Output() selectedElement = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  remove(element: any): void {
    const index = this.elements.indexOf(element);
    this.elements.splice(index, 1);
    this.removedElement.emit(this.elements);
  }
  select(element): void {
    this.selectedElement.emit(element);
  }
}

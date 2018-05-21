import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {
  @Input() elements: any[];
  @Output() newElements = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  remove(element: any): void {
    const index = this.elements.indexOf(element);

    if (index >= 0) {
      this.elements.splice(index, 1);
      this.newElements.emit(this.elements);
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-option-field',
  templateUrl: './select-option-field.component.html',
  styleUrls: ['./select-option-field.component.css']
})
export class SelectOptionFieldComponent implements OnInit {
  @Input() options: any[];
  @Input() placeholder: string;
  @Output() valueSelected = new EventEmitter;
  private selected: string;

  constructor() { }
  ngOnInit() {
  }
}

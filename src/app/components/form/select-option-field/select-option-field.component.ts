import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Option} from '../../../models/option';

@Component({
  selector: 'app-select-option-field',
  templateUrl: './select-option-field.component.html',
  styleUrls: ['./select-option-field.component.css']
})
export class SelectOptionFieldComponent implements OnInit {
  @Input() options: Option[];
  @Input() placeholder: string;
  @Output() valueSelected = new EventEmitter;
  private selected: string;

  constructor() { }
  ngOnInit() {
  }
}

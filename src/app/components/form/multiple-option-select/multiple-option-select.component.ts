import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-multiple-option-select',
  templateUrl: './multiple-option-select.component.html',
  styleUrls: ['./multiple-option-select.component.css']
})
export class MultipleOptionSelectComponent implements OnInit {
  @Input() options: any[];
  @Input() placeholder: string;
  @Output() selectionChange = new EventEmitter();
  optionsSelected: any[];

  constructor() { }

  ngOnInit() {
  }
}

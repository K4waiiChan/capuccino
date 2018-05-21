import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-planner',
  templateUrl: './schedule-planner.component.html',
  styleUrls: ['./schedule-planner.component.css']
})
export class SchedulePlannerComponent implements OnInit {
  public colorSelected = '1';
  public options = ['algo'];

  constructor() { }

  ngOnInit() {
  }

  public getSelected(ev) {
    this.colorSelected = ev;
  }

}

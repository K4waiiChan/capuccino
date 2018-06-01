import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input() groups;
  @Input() dataSource;
  private displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['hour', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  }

  ngOnInit() {
  }
  public overlap(elements: Array<any>) {
    if (elements.length > 1) {
      return '#ffd740';
    }
  }
}

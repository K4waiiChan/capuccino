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
  public getBackground(elements: Array<any>) {
    let color: string;
    let index: number;
    if (elements.length > 1) {
      color = '#fffff';
    } else if (elements.length === 1) {
      index = elements[0].index;
      switch (index) {
        case 0:
          color = '#CD6155';
          break;
        case 1:
          color = '#AF7AC5';
          break;
        case 2:
          color = '#7FB3D5';
          break;
        case 3:
          color = '#48C9B0';
          break;
        case 4:
          color = '#7DCEA0';
          break;
        case 5:
          color = '#F4D03F';
          break;
        case 6:
          color = '#EB984E';
          break;
        case 7:
          color = '#AAB7B8';
          break;
        case 8:
          color = '#5D6D7E';
          break;
        case 9:
          color = '#5DADE2';
          break;
      }
    }
    return color;
  }

  public getBorderColor(elements: Array<any>) {
    if (elements.length > 1) {
      return 'red';
    }
  }
}

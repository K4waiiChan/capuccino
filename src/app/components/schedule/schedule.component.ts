import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input() groups;
  @Input() dataSource;
  displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['hour', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  }

  ngOnInit() {
  }
  public getColor(elements: Array<any>) {
    let color: string;
    let borderColor: string;
    let index: number;
    if (elements.length > 1) {
      color = '#fffff';
      borderColor = 'red';
    } else if (elements.length === 1) {
      index = elements[0].index;
      switch (index % 10) {
        case 0:
          color = '#FF8A80';
          break;
        case 1:
          color = '#8C9EFF';
          break;
        case 2:
          color = '#FF80AB';
          break;
        case 3:
          color = '#84FFFF';
          break;
        case 4:
          color = '#80D8FF';
          break;
        case 5:
          color = '#A7FFEB';
          break;
        case 6:
          color = '#B9F6CA';
          break;
        case 7:
          color = '#FFFF8D';
          break;
        case 8:
          color = '#FFD180';
          break;
        case 9:
          color = '#CCFF90';
          break;
      }
    }
    return {'background': color, 'border-color': borderColor};
  }

  public getBorderColor(elements: Array<any>) {
    if (elements.length > 1) {
      return 'red';
    }
  }
}

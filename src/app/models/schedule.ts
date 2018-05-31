import { ScheduleRow } from './schedule-row';
import { Group } from './group';


export class Schedule {
  Rows: ScheduleRow[];

  public Schedule(rows) {
    this.Rows = new Array();
  }
  public getNewSchedule(groups: Group[]) {
    let content: string;
    for (const group of groups) {
      for (const schedule of group.horarios) {
        content = group.codigo + schedule.aula;
        this.setContentField(schedule.hora, schedule.dia, content);
      }
    }
    return this.Rows;
  }

  private setContentField(hour: string, day: string, content: string) {
    let row: ScheduleRow;
    row = this.getRow(hour);
    switch (day) {
      case 'LU': {
        row.monday = content;
        break;
      }
      case 'MA': {
        row.tuesday = content;
        break;
      }
      case 'MI': {
        row.thursday = content;
        break;
       }
      case 'JU': {
        row.wednesday = content;
        break;
      }
      case 'VI': {
        row.friday = content;
        break;
      }
      case 'SA': {
        row.saturday = content;
        break;
      }
    }
  }

  private getRow(hour: string) {
    let row: ScheduleRow;
    switch (hour) {
      case '645': {
        row = this.Rows[0];
        break;
      }
      case '815': {
        row = this.Rows[1];
        break;
      }
      case '945': {
        row = this.Rows[2];
        break;
      }
      case '1115': {
        row = this.Rows[3];
        break;
      }
      case '1245': {
        row = this.Rows[4];
        break;
      }
      case '1415': {
        row = this.Rows[5];
        break;
      }
      case '1545': {
        row = this.Rows[6];
        break;
      }
      case '1715': {
        row = this.Rows[7];
        break;
      }
      case '1845': {
        row = this.Rows[8];
        break;
      }
      case '2015': {
        row = this.Rows[9];
        break;
      }

    }
    return row;
  }
}

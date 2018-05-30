import { ScheduleRow } from './schedule-row';
import { Group } from './group';


export class Schedule {
  Rows: ScheduleRow[];

  public Schedule() {
    this.Rows = [
      {hour: '6:45 - 8:15', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '8:15 - 9:45', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '9:45 - 11:15', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '11:15 - 12:45', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '12:45 - 14:15', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '14:15 - 15:45', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '15:45 - 17:15', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '17:15 - 18:45', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '18:45 - 20:15', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      {hour: '20:15 - 21:45', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: ''},
      ];
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

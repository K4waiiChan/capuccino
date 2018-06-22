import { Component, OnInit, HostListener } from '@angular/core';
import { CareersService } from '../../services/careers.service';
import { Career } from '../../models/career';
import { Level } from '../../models/level';
import { Mateer, NewMateer } from '../../models/mateer';
import { ScheduleRow } from '../../models/schedule-row';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-schedule-planner',
  templateUrl: './schedule-planner.component.html',
  styleUrls: ['./schedule-planner.component.css']
})

export class SchedulePlannerComponent implements OnInit {
  careers: Career[];
  levels: Level[];
  mateers;
  groups;
  selectedGroups;
  schedule;
  scheduleSource;

  constructor(private careersService: CareersService, public snackBar: MatSnackBar) {
    this.selectedGroups = [];
    this.cleanSchedule();
  }

  ngOnInit() {
    this.careersService.getCareers().subscribe(response => {
      this.careers = response;
      this.openRotationMessage();
    });
  }

  public getLevels(ev) {
    this.careersService.getCareer(ev.codigo).subscribe(response => {
      this.levels = response.niveles;
    });
    this.mateers = null;
    this.groups = [];
    this.selectedGroups = [];
  }

  public getMateers(ev) {
    this.mateers = ev.materias;
    this.groups = [];
  }
  public getGroups(ev) {
    this.groups = ev.grupos;
  }

  public getSelectedGroups(ev) {
    this.selectedGroups = ev;
    this.getNewSchedule();
  }
  public getNewSchedule() {
    let content: any;
    this.cleanSchedule();
    for (const group of this.selectedGroups) {
      for (const schedule of group.horarios) {
        content = { description : group.abreviacion + ' (' + schedule.aula + ')', index: this.selectedGroups.indexOf(group) };
        this.setContentField(schedule.hora, schedule.dia, content);
      }
    }
  }
  private cleanSchedule() {
    this.schedule = [
      {hour: '6:45 - 8:15', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '8:15 - 9:45', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '9:45 - 11:15', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '11:15 - 12:45', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '12:45 - 14:15', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '14:15 - 15:45', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '15:45 - 17:15', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '17:15 - 18:45', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '18:45 - 20:15', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      {hour: '20:15 - 21:45', monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: []},
      ];
  }

  private setContentField(hour: string, day: string, content: string) {
    let row: ScheduleRow;
    row = this.getRow(hour);
    switch (day) {
      case 'LU': {
        row.monday.push(content);
        break;
      }
      case 'MA': {
        row.tuesday.push(content);
        break;
      }
      case 'MI': {
        row.thursday.push(content);
        break;
       }
      case 'JU': {
        row.wednesday.push(content);
        break;
      }
      case 'VI': {
        row.friday.push(content);
        break;
      }
      case 'SA': {
        row.saturday.push(content);
        break;
      }
    }
  }

  private getRow(hour: string) {
    let row: ScheduleRow;
    switch (hour) {
      case '645': {
        row = this.schedule[0];
        break;
      }
      case '815': {
        row = this.schedule[1];
        break;
      }
      case '945': {
        row = this.schedule[2];
        break;
      }
      case '1115': {
        row = this.schedule[3];
        break;
      }
      case '1245': {
        row = this.schedule[4];
        break;
      }
      case '1415': {
        row = this.schedule[5];
        break;
      }
      case '1545': {
        row = this.schedule[6];
        break;
      }
      case '1715': {
        row = this.schedule[7];
        break;
      }
      case '1845': {
        row = this.schedule[8];
        break;
      }
      case '2015': {
        row = this.schedule[9];
        break;
      }

    }
    return row;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.openRotationMessage();
  }

 private openRotationMessage(): void {
    if (window.innerWidth <= 600) {
      this.snackBar.open('Gira el telefono horizontalmente para poder ver tu horario');
    } else {
      this.snackBar.dismiss();
    }
 }
}

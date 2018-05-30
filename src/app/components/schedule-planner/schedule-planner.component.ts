import { Component, OnInit } from '@angular/core';
import { CareersService } from '../../services/careers.service';
import { Career } from '../../models/career';
import { Level } from '../../models/level';
import { Mateer, NewMateer } from '../../models/mateer';
import { Schedule } from '../../models/schedule';

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
  selectedMateer;
  schedule;
  scheduleSource;

  constructor(private careersService: CareersService) {
    this.selectedGroups = [];
    this.schedule = new Schedule();
    this.scheduleSource = this.schedule.getNewSchedule([]);

  }

  ngOnInit() {
    this.careersService.getCareers().subscribe(response => {
      this.careers = response;
    });
  }

  public getLevels(ev) {
    this.careersService.getCareer(ev.codigo).subscribe(response => {
      this.levels = response.niveles;
    });
  }

  public getMateers(ev) {
    this.mateers = ev.materias;
  }
  public getSelectedMateer(ev) {
    this.selectedMateer = ev;
  }
  public getGroups(ev) {
    this.groups = ev.grupos;
  }

  public getSelectedGroups(ev) {
    this.selectedGroups = ev;
    console.log(ev);
    this.scheduleSource = this.schedule.getNewSchedule(this.selectedGroups);
  }
}

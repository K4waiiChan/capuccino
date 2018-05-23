import { Component, OnInit } from '@angular/core';
import { CareersService } from '../../services/careers.service';
import { Career } from '../../models/career';
import { Level } from '../../models/level';

@Component({
  selector: 'app-schedule-planner',
  templateUrl: './schedule-planner.component.html',
  styleUrls: ['./schedule-planner.component.css']
})

export class SchedulePlannerComponent implements OnInit {
  options = ['algo'];
  careers: Career[];
  levels: Level[];
  constructor(private careersService: CareersService) {
  }

  ngOnInit() {
    this.careersService.getCareers().subscribe(response => {
      this.careers = response;
    });
  }

  public getLevels(ev) {
    this.careersService.getCareer(ev).subscribe(response => {
      this.levels = response.niveles;
      console.log(this.levels);
    });
  }
}

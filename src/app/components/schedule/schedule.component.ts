import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  displayedColumns = ['hour', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
}
export interface Element {
  hour: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}

const ELEMENT_DATA: Element[] = [
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

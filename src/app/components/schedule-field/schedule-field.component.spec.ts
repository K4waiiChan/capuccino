import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFieldComponent } from './schedule-field.component';

describe('ScheduleFieldComponent', () => {
  let component: ScheduleFieldComponent;
  let fixture: ComponentFixture<ScheduleFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

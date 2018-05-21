import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePlannerComponent } from './schedule-planner.component';

describe('SchedulePlannerComponent', () => {
  let component: SchedulePlannerComponent;
  let fixture: ComponentFixture<SchedulePlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

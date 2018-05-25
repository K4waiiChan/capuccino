import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOptionSelectComponent } from './multiple-option-select.component';

describe('MultipleOptionSelectComponent', () => {
  let component: MultipleOptionSelectComponent;
  let fixture: ComponentFixture<MultipleOptionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleOptionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleOptionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

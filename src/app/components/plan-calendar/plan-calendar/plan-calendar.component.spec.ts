import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCalendarComponent } from './plan-calendar.component';

describe('PlanCalendarComponent', () => {
  let component: PlanCalendarComponent;
  let fixture: ComponentFixture<PlanCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

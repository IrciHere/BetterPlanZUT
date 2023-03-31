import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCalendarHeaderComponent } from './plan-calendar-header.component';

describe('PlanCalendarHeaderComponent', () => {
  let component: PlanCalendarHeaderComponent;
  let fixture: ComponentFixture<PlanCalendarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanCalendarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

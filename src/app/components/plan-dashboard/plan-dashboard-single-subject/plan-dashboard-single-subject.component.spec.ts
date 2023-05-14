import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDashboardSingleSubjectComponent } from './plan-dashboard-single-subject.component';

describe('PlanDashboardSingleSubjectComponent', () => {
  let component: PlanDashboardSingleSubjectComponent;
  let fixture: ComponentFixture<PlanDashboardSingleSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDashboardSingleSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDashboardSingleSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

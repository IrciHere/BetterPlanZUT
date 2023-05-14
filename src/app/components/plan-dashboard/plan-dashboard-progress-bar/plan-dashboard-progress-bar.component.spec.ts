import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDashboardProgressBarComponent } from './plan-dashboard-progress-bar.component';

describe('PlanDashboardProgressBarComponent', () => {
  let component: PlanDashboardProgressBarComponent;
  let fixture: ComponentFixture<PlanDashboardProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDashboardProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDashboardProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

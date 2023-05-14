import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDashboardComponent } from './plan-dashboard.component';

describe('PlanAccordionComponent', () => {
  let component: PlanDashboardComponent;
  let fixture: ComponentFixture<PlanDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

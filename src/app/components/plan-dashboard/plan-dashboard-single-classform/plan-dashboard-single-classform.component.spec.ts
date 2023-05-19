import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDashboardSingleClassformComponent } from './plan-dashboard-single-classform.component';

describe('PlanDashboardSingleClassformComponent', () => {
  let component: PlanDashboardSingleClassformComponent;
  let fixture: ComponentFixture<PlanDashboardSingleClassformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDashboardSingleClassformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDashboardSingleClassformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

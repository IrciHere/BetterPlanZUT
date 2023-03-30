import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAccordionComponent } from './plan-accordion.component';

describe('PlanAccordionComponent', () => {
  let component: PlanAccordionComponent;
  let fixture: ComponentFixture<PlanAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

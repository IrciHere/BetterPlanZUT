import {Component, Input} from '@angular/core';
import {PlanItem} from "../../../models/PlanItem";

@Component({
  selector: 'app-plan-accordion',
  templateUrl: './plan-accordion.component.html',
  styleUrls: ['./plan-accordion.component.scss']
})
export class PlanAccordionComponent {
  @Input()
  planItems: PlanItem[] = [];
}

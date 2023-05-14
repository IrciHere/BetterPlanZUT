import {Component, Input} from '@angular/core';
import {PlanItem} from "../../../models/PlanItem";

@Component({
  selector: 'app-plan-dashboard',
  templateUrl: './plan-dashboard.component.html',
  styleUrls: ['./plan-dashboard.component.scss']
})
export class PlanDashboardComponent {
  @Input()
  planItems: PlanItem[] = [];

  planItemsSorted: { [id: string] : PlanItem[]; } = {};

  groupPlanItemsToDictionary(items: PlanItem[]) {
    this.planItemsSorted = {};

    items.forEach((planItem) => {
      if (!this.planItemsSorted[planItem.subject]) {
        this.planItemsSorted[planItem.subject] = [planItem];
      }
      else {
        this.planItemsSorted[planItem.subject].push(planItem);
      }
    })
  }

  ngOnChanges() {
    this.groupPlanItemsToDictionary(this.planItems);
  }
}

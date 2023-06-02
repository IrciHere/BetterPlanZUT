import {Component, Input} from '@angular/core';
import {PlanItem} from "../../../models/PlanItem";
import {DashboardSingleSubject} from "../../../models/DashboardSingleSubject";

@Component({
  selector: 'app-plan-dashboard-single-subject',
  templateUrl: './plan-dashboard-single-subject.component.html',
  styleUrls: ['./plan-dashboard-single-subject.component.scss']
})
export class PlanDashboardSingleSubjectComponent {
  @Input()
  subjectItems: PlanItem[] = [];

  currentDateTime: Date = new Date();
  dashboardSubjects: DashboardSingleSubject[] = [];

  groupSubjectItems(items: PlanItem[]) {
    let subjectItemsGrouped: { [id: string] : PlanItem[]; } = {};

    items.forEach((planItem) => {
      if (planItem.lesson_status_short === "o") {
        return;
      }

      planItem.end = new Date(planItem.end);

      const arrayKey = planItem.lesson_status.toLowerCase().includes("egzamin") ? "Egzamin" : planItem.lesson_form;

      if (!subjectItemsGrouped[arrayKey]) {
        subjectItemsGrouped[arrayKey] = [planItem];
      }
      else {
        subjectItemsGrouped[arrayKey].push(planItem);
      }
    });

    const keys = Object.keys(subjectItemsGrouped);

    this.dashboardSubjects = keys.map(key =>
      this.mapSubjectItemsToDashboardSingleSubject(subjectItemsGrouped[key], key)
    );
  }

  mapSubjectItemsToDashboardSingleSubject(items: PlanItem[], classForm: string): DashboardSingleSubject {
    const classesList = items;
    const allClasses = items.length;
    const pastClasses = items.reduce((count, item) => {
      if (item.end.getTime() < this.currentDateTime.getTime()) {
        return count + 1;
      }
      return count;
    }, 0);

    return {classesList, allClasses, pastClasses, classForm};
  }

  ngOnChanges(){
    this.groupSubjectItems(this.subjectItems);
  }
}

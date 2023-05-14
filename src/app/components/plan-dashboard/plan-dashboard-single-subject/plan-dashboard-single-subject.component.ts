import {Component, Input} from '@angular/core';
import {PlanItem} from "../../../models/PlanItem";
import {DashboardSingleSubject} from "../../../models/DashboardSingleSubject";

@Component({
  selector: 'app-plan-dashboard-single-subject',
  templateUrl: './plan-dashboard-single-subject.component.html',
  styleUrls: ['./plan-dashboard-single-subject.component.scss']
})
export class PlanDashboardSingleSubjectComponent {
  dateShowFormat: string = "dd MMM yyyy, HH:mm";

  @Input()
  subjectItems: PlanItem[] = [];

  currentDateTime: Date = new Date();
  dashboardSubjects: DashboardSingleSubject[] = [];

  groupSubjectItems(items: PlanItem[]) {
    let subjectItemsGrouped: { [id: string] : PlanItem[]; } = {};

    items.forEach((planItem) => {
      planItem.end = new Date(planItem.end);

      if (!subjectItemsGrouped[planItem.lesson_form_short]) {
        subjectItemsGrouped[planItem.lesson_form_short] = [planItem];
      }
      else {
        subjectItemsGrouped[planItem.lesson_form_short].push(planItem);
      }
    });

    const keys = Object.keys(subjectItemsGrouped);

    this.dashboardSubjects = keys.map(key =>
      this.mapSubjectItemsToDashboardSingleSubject(subjectItemsGrouped[key])
    );
  }

  mapSubjectItemsToDashboardSingleSubject(items: PlanItem[]): DashboardSingleSubject {
    const classForm = items[0].lesson_form;
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

import {Component, Input} from '@angular/core';
import {DashboardSingleSubject} from "../../../models/DashboardSingleSubject";

@Component({
  selector: 'app-plan-dashboard-single-classform',
  templateUrl: './plan-dashboard-single-classform.component.html',
  styleUrls: ['./plan-dashboard-single-classform.component.scss']
})
export class PlanDashboardSingleClassformComponent {
  dateShowFormat: string = "dd MMM yyyy";
  timeShowFormat: string = "HH:mm";

  @Input()
  currentDateTime: Date = new Date();

  @Input()
  dashboardSingleSubject: DashboardSingleSubject = {
    allClasses: 0, classForm: "", classesList: [], pastClasses: 0
  };
}

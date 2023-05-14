import {PlanItem} from "./PlanItem";

export interface DashboardSingleSubject {
  pastClasses: number;
  allClasses: number;
  classesList: PlanItem[];
  classForm: string;
}

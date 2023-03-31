import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanItem} from "../models/PlanItem";

@Injectable({
  providedIn: 'root'
})
export class PlanServiceService {

  private baseUrl: string = "api/schedule_student.php?number=49407&start=2023-03-06T00:00:00+01:00&end=2023-03-13T00:00:00+01:00";
  private semesterStartDate: string = "2023-03-01";
  private semesterEndDate: string = "2023-07-31";

  constructor(private httpClient: HttpClient) { }

  getPlanForStudent(indexNumber: string): Observable<PlanItem[]> {
    const url = `/api/schedule_student.php?start=${this.semesterStartDate}&end=${this.semesterEndDate}&number=${indexNumber}`;
    return this.httpClient.get<PlanItem[]>(url);
  }
}

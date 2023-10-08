import {Injectable, isDevMode} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanItem} from "../models/PlanItem";

@Injectable({
  providedIn: 'root'
})
export class PlanServiceService {
  constructor(private httpClient: HttpClient) { }

  getPlanForStudent(indexNumber: string, startDate: Date, endDate: Date): Observable<PlanItem[]> {
    const baseUrl = isDevMode() ? '/api' : 'https://plan.zut.edu.pl';
    const url = `${baseUrl}/schedule_student.php?start=${startDate}&end=${endDate}&number=${indexNumber}`;
    return this.httpClient.get<PlanItem[]>(url);
  }
}

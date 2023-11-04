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
    const baseUrl = isDevMode() ? '/api' : 'https://europe-north1-refined-vector-404120.cloudfunctions.net/PlanZutProxy';
    const url = `${baseUrl}/schedule_student.php?start=${startDate}&end=${endDate}&number=${indexNumber}`;
    return this.httpClient.get<PlanItem[]>(url);
  }
}

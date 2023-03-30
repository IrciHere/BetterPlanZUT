import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {PlanServiceService} from "../../../services/plan-service.service";
import {PlanItem} from "../../../models/PlanItem";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  plan: PlanItem[] = [];

  constructor(private planService: PlanServiceService) {
  }

  indexNumberInput = new FormControl('');

  getPlanForIndex() {
    const indexNumber = this.indexNumberInput.value;

    if (!indexNumber || isNaN(Number(indexNumber))) {
      alert("Podaj poprawny numer indeksu!");
      return;
    }

    this.planService.getPlanForStudent(indexNumber)
      .subscribe(data => {
        this.plan = data.filter(item => Object.keys(item).length > 0);
      });
  }
}

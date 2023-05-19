import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlanServiceService} from "../../../services/plan-service.service";
import {PlanItem} from "../../../models/PlanItem";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  plan: PlanItem[] = [];

  semesterStartDate: Date = new Date();
  semesterEndDate: Date = new Date();

  constructor(private planService: PlanServiceService, private formBuilder: FormBuilder) {
    this.setDatesForCurrentSemester();
  }

  searchForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.setDatesForCurrentSemester();

    this.createForm();
  }

  getPlanForIndex() {
    const indexNumber = this.searchForm.value.indexNumberInput;
    const startDate = this.searchForm.value.startDateInput;
    const endDate = this.searchForm.value.endDateInput;

    if (!indexNumber || isNaN(Number(indexNumber))) {
      alert("Podaj poprawny numer indeksu!");
      return;
    }

    this.planService.getPlanForStudent(indexNumber, startDate, endDate)
      .subscribe(data => {
        this.plan = data.filter(item => Object.keys(item).length > 0);
      });
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      indexNumberInput: "",
      startDateInput: [formatDate(this.semesterStartDate, 'yyyy-MM-dd', 'en'), [Validators.required]],
      endDateInput: [formatDate(this.semesterEndDate, 'yyyy-MM-dd', 'en'), [Validators.required]]
    });
  }

  setDatesForCurrentSemester() {
    const monthNumbersDict = {
      "February": 1,
      "March": 2,
      "August": 7,
      "October": 9
    };

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    this.semesterStartDate.setDate(1);

    if (currentMonth > monthNumbersDict["February"] && currentMonth < monthNumbersDict["October"]) {
      // Summer semester
      this.semesterStartDate.setMonth(monthNumbersDict["March"]);
      this.semesterEndDate.setMonth(monthNumbersDict["August"]);
      this.semesterEndDate.setDate(31);
    }
    else {
      // Winter semester
      this.semesterStartDate.setMonth(monthNumbersDict["October"]);
      this.semesterEndDate.setMonth(monthNumbersDict["February"]);
      this.semesterEndDate.setDate(28);

      if (currentMonth <= monthNumbersDict["February"]) {
        this.semesterStartDate.setFullYear(currentYear - 1);
      }
      else {
        this.semesterEndDate.setFullYear(currentYear + 1);
      }
    }
  }
}

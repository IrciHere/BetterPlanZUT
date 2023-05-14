import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePl from '@angular/common/locales/pl'

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form/search-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PlanDashboardComponent } from './components/plan-dashboard/plan-dashboard/plan-dashboard.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PlanCalendarComponent } from './components/plan-calendar/plan-calendar/plan-calendar.component';
import { PlanCalendarHeaderComponent } from './components/plan-calendar-header/plan-calendar-header/plan-calendar-header.component';
import {registerLocaleData} from "@angular/common";
import { PlanDashboardSingleSubjectComponent } from './components/plan-dashboard/plan-dashboard-single-subject/plan-dashboard-single-subject.component';
import { PlanDashboardProgressBarComponent } from './components/plan-dashboard/plan-dashboard-progress-bar/plan-dashboard-progress-bar.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PlanDashboardComponent,
    PlanCalendarComponent,
    PlanCalendarHeaderComponent,
    PlanDashboardSingleSubjectComponent,
    PlanDashboardProgressBarComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
      HttpClientModule,
      CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

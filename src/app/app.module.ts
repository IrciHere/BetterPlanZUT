import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePl from '@angular/common/locales/pl'

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form/search-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PlanAccordionComponent } from './components/plan-accordion/plan-accordion/plan-accordion.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PlanCalendarComponent } from './components/plan-calendar/plan-calendar/plan-calendar.component';
import { PlanCalendarHeaderComponent } from './components/plan-calendar-header/plan-calendar-header/plan-calendar-header.component';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PlanAccordionComponent,
    PlanCalendarComponent,
    PlanCalendarHeaderComponent
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

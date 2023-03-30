import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form/search-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PlanAccordionComponent } from './components/plan-accordion/plan-accordion/plan-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PlanAccordionComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

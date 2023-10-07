import {
  ChangeDetectionStrategy,
  Component, Input,
  ViewEncapsulation,
} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Subject} from 'rxjs';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView, DAYS_OF_WEEK,
} from 'angular-calendar';
import {
  addDays,
  addHours,
  isSameDay,
  setDay,
  startOfDay,
  subDays,
  subSeconds,
} from 'date-fns';
import {CustomDateFormatter} from "./providers/custom-date-formatter.provider";
import {PlanItem} from "../../../models/PlanItem";
import {da, pl} from "date-fns/locale";

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-plan-calendar',
  templateUrl: './plan-calendar.component.html',
  styleUrls: ['./plan-calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class PlanCalendarComponent {
  @Input()
  planItems: PlanItem[] = [];

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  locale = 'pl';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  private planItemsSubject = new BehaviorSubject<PlanItem[]>(this.planItems);

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(setDay(new Date(), 3)), 2),
      end: subSeconds(addHours(startOfDay(setDay(new Date(), 3)), 3), 1),
      title: 'An short event',
      color: colors.yellow
    },
    {
      start: addHours(startOfDay(setDay(new Date(), 3)), 5),
      end: subSeconds(addHours(startOfDay(setDay(new Date(), 3)), 10), 1),
      title: 'A draggable and resizable event',
      color: colors.yellow
    },
  ];

  getTimeFromDate(date: Date): string {
    const hours = date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

    return `${hours}:${minutes}`;
  }

  mapPlanItemToCalendarEvent(planItem: PlanItem): CalendarEvent{
    const startDate = new Date(planItem.start);
    const endDate = new Date(planItem.end);

    return {
      title: `${this.getTimeFromDate(startDate)} - ${this.getTimeFromDate(endDate)}<br/>${planItem.title}`,
      color: {
        primary: planItem.color,
        secondary: planItem.color
      },
      start: startDate,
      end: endDate,
      cssClass: 'single-calendar-event'
    }
  };

  ngOnInit() {
    combineLatest([this.planItemsSubject.asObservable()])
      .pipe(
        map(([planItems]) => {
          return planItems.map(planItem => this.mapPlanItemToCalendarEvent(planItem));
        })
      )
      .subscribe((calendarEvents) => (this.events = calendarEvents));
  }

  ngOnChanges() {
    this.planItemsSubject.next(this.planItems);
  }

  refresh = new Subject<void>();
}

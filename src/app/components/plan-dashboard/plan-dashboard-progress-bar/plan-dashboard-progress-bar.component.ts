import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-plan-dashboard-progress-bar',
  templateUrl: './plan-dashboard-progress-bar.component.html',
  styleUrls: ['./plan-dashboard-progress-bar.component.scss']
})
export class PlanDashboardProgressBarComponent {
  @Input() currentValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() barColor: string = '#007bff';

  get percentage() {
    return Math.round((this.currentValue / this.maxValue) * 100);
  }
}

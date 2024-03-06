import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomThComponent } from './components/custom-th/custom-th.component';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  standalone: true,
  imports: [CustomThComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent {


  constructor() { }

}

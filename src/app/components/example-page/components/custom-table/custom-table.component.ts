import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomTrComponent } from './components/custom-tr/custom-tr.component';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  standalone: true,
  imports: [CustomTrComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent {


  constructor() { }

}

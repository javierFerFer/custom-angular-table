import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-th',
  templateUrl: './custom-th.component.html',
  styleUrls: ['./custom-th.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomThComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

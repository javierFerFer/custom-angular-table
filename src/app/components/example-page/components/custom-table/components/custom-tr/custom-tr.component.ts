import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: '[app-custom-tr]',
  templateUrl: './custom-tr.component.html',
  styleUrls: ['./custom-tr.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTrComponent<T> {

  
  @Input({
    required: true
  })
  content!: T[]

  @Input({
    required: true
  })
  type!: 'th' | 'td';

  @ContentChild('header',{static: false}) headerTemplateRef!: TemplateRef<any>;


  constructor() {
  }

}

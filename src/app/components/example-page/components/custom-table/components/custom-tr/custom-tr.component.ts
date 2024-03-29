import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[app-custom-tr]',
  templateUrl: './custom-tr.component.html',
  styleUrls: ['./custom-tr.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTrComponent {

  
  @Input(
    {required: true}
  )
  content!: any

  @Input({
    required: true
  })
  type!: 'headers' | 'content';

  // key: unknown = null;

  // @ContentChild('header',{static: false}) headerTemplateRef!: TemplateRef<any>;
  // @ContentChild('content',{static: false}) contentTemplateRef!: TemplateRef<any>;


  constructor() {
  }

}

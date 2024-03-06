import { AfterViewInit, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustomTh]',
  standalone: true
})
export class CustomThDirective implements AfterViewInit {

  constructor(public templateRef: TemplateRef<unknown>) {}
  
  ngAfterViewInit(): void {

  }
  
}

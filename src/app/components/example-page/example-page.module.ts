import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExamplePageRoutingModule } from './example-page-routing.module';
import { ExamplePageComponent } from './example-page.component';

@NgModule({
  imports: [
    CommonModule,
    ExamplePageRoutingModule
  ],
  declarations: [ExamplePageComponent],
  exports: [ExamplePageComponent]
})
export class ExamplePageModule { }

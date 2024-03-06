import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomTrComponent } from './components/custom-table/components/custom-tr/custom-tr.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomThDirective } from './directives/th/custom-th.directive';
import { ExamplePageRoutingModule } from './example-page-routing.module';
import { ExamplePageComponent } from './example-page.component';

@NgModule({
  imports: [
    CommonModule,
    ExamplePageRoutingModule,
    CustomTableComponent,
    CustomTrComponent,
    CustomThDirective
    // CustomThComponent,
    // TrDirective
  ],
  declarations: [ExamplePageComponent],
  exports: [ExamplePageComponent]
})
export class ExamplePageModule { }

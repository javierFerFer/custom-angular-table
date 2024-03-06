import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/example-page/example-page.module').then(
        (m) => m.ExamplePageModule
      ),
  },
];

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface DummyData {
  name: string;
  surname: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class DummyTableDataService {
  constructor() {}

  public getDummyData(): Observable<DummyData[]> {
    return of(
      [
        {
          name: 'javi',
          surname: 'fernandez',
          userId: 1
        },
        {
          name: 'alberto1',
          surname: 'fernandez',
          userId: 2
        },
        {
          name: 'alberto2',
          surname: 'fernandez',
          userId: 3
        },
        {
          name: 'alberto3',
          surname: 'fernandez',
          userId: 4
        },
        {
          name: 'alberto4',
          surname: 'fernandez',
          userId: 5
        },
      ]
    );
  }
}

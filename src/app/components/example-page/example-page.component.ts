import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DummyData,
  DummyTableDataService,
} from '../../services/dummy-table-data.service';

export interface Column {
  title: string;
  cssClass?: string;
}

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss'],
})
export class ExamplePageComponent implements OnInit {
  public columns: Column[] = [
    {
      title: 'actions',
    },
    {
      title: 'columna_1',
      cssClass: 'first-column'
    },
    {
      title: 'columna_2',
    },
    {
      title: 'columna_3',
    },
    {
      title: 'columna_4',
    },
  ];

  public rows$!: Observable<DummyData[]>;

  constructor(private dummyTableData: DummyTableDataService) {}

  ngOnInit(): void {
    this.rows$ = this.dummyTableData.getDummyData();
  }
}

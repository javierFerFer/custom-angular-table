import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DummyData, DummyTableDataService } from '../../services/dummy-table-data.service';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit{

  public columns = [
    'columna_1',
    'columna_2'
  ]

  public rows$!: Observable<DummyData[]>;

  constructor(private dummyTableData: DummyTableDataService) { }

  ngOnInit(): void {
    this.rows$ = this.dummyTableData.getDummyData();
  }

}

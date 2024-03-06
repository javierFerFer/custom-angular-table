/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DummyTableDataService } from './dummy-table-data.service';

describe('Service: DummyTableData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyTableDataService]
    });
  });

  it('should ...', inject([DummyTableDataService], (service: DummyTableDataService) => {
    expect(service).toBeTruthy();
  }));
});

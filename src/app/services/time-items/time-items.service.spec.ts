import { TestBed } from '@angular/core/testing';

import { TimeItemsService } from './time-items.service';

describe('TimeItemsService', () => {
  let service: TimeItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

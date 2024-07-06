import { TestBed } from '@angular/core/testing';

import { ToggleStateService } from './toggle-state.service';

describe('ToggleStateService', () => {
  let service: ToggleStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

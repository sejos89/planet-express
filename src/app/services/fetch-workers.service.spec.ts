import { TestBed } from '@angular/core/testing';

import { FetchWorkersService } from './fetch-workers.service';

describe('FetchWorkersService', () => {
  let service: FetchWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

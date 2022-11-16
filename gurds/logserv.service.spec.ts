import { TestBed } from '@angular/core/testing';

import { LogservService } from './logserv.service';

describe('LogservService', () => {
  let service: LogservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

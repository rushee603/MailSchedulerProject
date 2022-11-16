import { TestBed } from '@angular/core/testing';

import { ValidService } from './valid.service';

describe('ValidService', () => {
  let service: ValidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

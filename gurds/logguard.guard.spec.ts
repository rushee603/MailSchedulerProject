import { TestBed } from '@angular/core/testing';

import { LogguardGuard } from './logguard.guard';

describe('LogguardGuard', () => {
  let guard: LogguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

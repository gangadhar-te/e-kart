import { TestBed } from '@angular/core/testing';

import { HiGuard } from './hi.guard';

describe('HiGuard', () => {
  let guard: HiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

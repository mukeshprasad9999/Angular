import { TestBed, async, inject } from '@angular/core/testing';

import { TempGuard } from './temp.guard';

describe('TempGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempGuard]
    });
  });

  it('should ...', inject([TempGuard], (guard: TempGuard) => {
    expect(guard).toBeTruthy();
  }));
});

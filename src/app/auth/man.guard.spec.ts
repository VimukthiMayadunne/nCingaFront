import { TestBed, async, inject } from '@angular/core/testing';

import { ManGuard } from './man.guard';

describe('ManGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManGuard]
    });
  });

  it('should ...', inject([ManGuard], (guard: ManGuard) => {
    expect(guard).toBeTruthy();
  }));
});

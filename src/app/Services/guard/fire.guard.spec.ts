import { TestBed, async, inject } from '@angular/core/testing';

import { FireGuard } from './fire.guard';

describe('FireGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireGuard]
    });
  });

  it('should ...', inject([FireGuard], (guard: FireGuard) => {
    expect(guard).toBeTruthy();
  }));
});

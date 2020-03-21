import { TestBed } from '@angular/core/testing';

import { AlertEventService } from './alert-event.service';

describe('AlertEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertEventService = TestBed.get(AlertEventService);
    expect(service).toBeTruthy();
  });
});

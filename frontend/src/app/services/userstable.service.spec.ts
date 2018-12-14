import { TestBed } from '@angular/core/testing';

import { UserstableService } from './userstable.service';

describe('UserstableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserstableService = TestBed.get(UserstableService);
    expect(service).toBeTruthy();
  });
});

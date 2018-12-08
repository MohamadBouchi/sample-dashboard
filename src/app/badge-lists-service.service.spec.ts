import { TestBed } from '@angular/core/testing';

import { BadgeListsServiceService } from './badge-lists-service.service';

describe('BadgeListsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadgeListsServiceService = TestBed.get(BadgeListsServiceService);
    expect(service).toBeTruthy();
  });
});

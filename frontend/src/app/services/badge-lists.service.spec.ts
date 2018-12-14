import { TestBed } from '@angular/core/testing';

import { BadgeListsService } from './badge-lists.service';

describe('BadgeListsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadgeListsService = TestBed.get(BadgeListsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SelectMenuService } from './select-menu.service';

describe('SelectMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectMenuService = TestBed.get(SelectMenuService);
    expect(service).toBeTruthy();
  });
});

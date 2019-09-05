import { TestBed } from '@angular/core/testing';

import { GuardAdminService } from './guard-admin.service';

describe('GuardAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardAdminService = TestBed.get(GuardAdminService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GuardDirectorService } from './guard-director.service';

describe('GuardDirectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardDirectorService = TestBed.get(GuardDirectorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GuardInvestigadorService } from './guard-investigador.service';

describe('GuardInvestigadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardInvestigadorService = TestBed.get(GuardInvestigadorService);
    expect(service).toBeTruthy();
  });
});

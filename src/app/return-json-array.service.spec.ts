import { TestBed } from '@angular/core/testing';

import { ReturnJsonArrayService } from './return-json-array.service';

describe('ReturnJsonArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturnJsonArrayService = TestBed.get(ReturnJsonArrayService);
    expect(service).toBeTruthy();
  });
});

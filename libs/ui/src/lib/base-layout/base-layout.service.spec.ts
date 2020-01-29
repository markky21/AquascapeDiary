import { TestBed } from '@angular/core/testing';

import { BaseLayoutService } from './base-layout.service';

describe('BaseLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseLayoutService = TestBed.get(BaseLayoutService);
    expect(service).toBeTruthy();
  });
});

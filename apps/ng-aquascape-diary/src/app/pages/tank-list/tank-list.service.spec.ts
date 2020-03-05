import { TestBed } from '@angular/core/testing';

import { TankListService } from './tank-list.service';

describe('TankListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TankListService = TestBed.get(TankListService);
    expect(service).toBeTruthy();
  });
});

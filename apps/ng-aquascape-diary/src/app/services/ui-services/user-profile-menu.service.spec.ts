import { TestBed } from '@angular/core/testing';

import { UserProfileMenuService } from './user-profile-menu.service';

describe('UserProfileMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserProfileMenuService = TestBed.get(UserProfileMenuService);
    expect(service).toBeTruthy();
  });
});

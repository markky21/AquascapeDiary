import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModule } from '@aquascape-diary/ui';
import { UserProfileMenuComponent } from './user-profile-menu.component';

// TODO fix this test
describe.skip('UserProfileMenuComponent', () => {
  let component: UserProfileMenuComponent;
  let fixture: ComponentFixture<UserProfileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

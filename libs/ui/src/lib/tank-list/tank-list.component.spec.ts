import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankListComponent, TankListModule } from '@aquascape-diary/ui';
import { NbLayoutModule } from '@nebular/theme';

// TODO fix this test
describe.skip('TankListComponent', () => {
  let component: TankListComponent;
  let fixture: ComponentFixture<TankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TankListModule, NbLayoutModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

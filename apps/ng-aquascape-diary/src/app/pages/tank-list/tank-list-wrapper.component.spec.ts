import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankListWrapperComponent } from './tank-list-wrapper.component';

describe('DiaryComponent', () => {
  let component: TankListWrapperComponent;
  let fixture: ComponentFixture<TankListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TankListWrapperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutSubheaderComponent } from './base-layout-subheader.component';

describe('BaseLayoutSubheaderComponent', () => {
  let component: BaseLayoutSubheaderComponent;
  let fixture: ComponentFixture<BaseLayoutSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLayoutSubheaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

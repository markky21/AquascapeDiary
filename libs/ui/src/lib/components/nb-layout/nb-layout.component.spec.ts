import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbLayoutComponent } from './nb-layout.component';

describe('NbLayoutComponent', () => {
  let component: NbLayoutComponent;
  let fixture: ComponentFixture<NbLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

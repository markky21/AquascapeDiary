import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeModule } from '../../@theme/theme.module';
import { TankListWrapperComponent } from './tank-list-wrapper.component';
import { TankListWrapperModule } from './tank-list.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DiaryComponent', () => {
  let component: TankListWrapperComponent;
  let fixture: ComponentFixture<TankListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TankListWrapperModule, ThemeModule, RouterTestingModule]
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

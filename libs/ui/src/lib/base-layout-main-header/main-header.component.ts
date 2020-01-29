import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'aquascape-diary-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent {
  @Output() public sideNavClick = new EventEmitter();
  @Output() public toggleThemeClick = new EventEmitter();

}

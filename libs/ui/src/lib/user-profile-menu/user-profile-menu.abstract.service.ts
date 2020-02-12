import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { Observable } from 'rxjs';

export abstract class UserProfileMenuAbstractService {
  public abstract getMenuItems$(): Observable<NbMenuItem[]>;
  public abstract getName$(): Observable<string>;
  public abstract getTitle$(): Observable<string>;
  public abstract getBadgeText$(): Observable<string>;
  public abstract getPicture$(): Observable<string>;
  public abstract onMenuItemClick(menuItem: string): void;
}

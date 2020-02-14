import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, share } from 'rxjs/operators';

@Injectable()
export class LayoutService {
  private readonly layoutSize$ = new Subject();
  private readonly destroy$ = new Subject<any>();

  public hostDestroyed(): void {
    this.destroy$.next();
  }

  public changeLayoutSize() {
    this.layoutSize$.next();
  }

  public onChangeLayoutSize(): Observable<any> {
    return this.layoutSize$.pipe(share(), delay(1));
  }
}

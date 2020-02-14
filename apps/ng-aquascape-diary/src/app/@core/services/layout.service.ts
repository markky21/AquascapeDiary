import { Injectable } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Observable, Subject } from 'rxjs';
import { delay, share, takeUntil } from 'rxjs/operators';

import { UiStore } from '../store/ui';

import { AppLocation } from './app-location.service';

@Injectable()
export class LayoutService {
  private readonly layoutSize$ = new Subject();
  private readonly destroy$ = new Subject<any>();

  public constructor(
    private appLocation: AppLocation,
    private nbAuthService: NbAuthService,
    private uiStore: UiStore
  ) {
    this.nbAuthService
      .onAuthenticationChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(is => this.uiStore.update({ layout_showSideBar: is }));
  }
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

import { Injectable } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Observable, Subject } from 'rxjs';
import { delay, share, takeUntil } from 'rxjs/operators';

import { AppLocation } from './app-location.service';

@Injectable()
export class LayoutService {
  private readonly showSideBar$: Subject<boolean> = new Subject();
  private readonly layoutSize$ = new Subject();
  private readonly destroy$ = new Subject<any>();

  public constructor(
    private appLocation: AppLocation,
    private nbAuthService: NbAuthService
  ) {
    this.nbAuthService
      .onAuthenticationChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(is => this.showSideBar$.next(is));
  }
  public hostDestroyed(): void {
    this.destroy$.next();
  }
  public getShowSideBar$(): Observable<boolean> {
    return this.showSideBar$.asObservable();
  }

  public changeLayoutSize() {
    this.layoutSize$.next();
  }

  public onChangeLayoutSize(): Observable<any> {
    return this.layoutSize$.pipe(share(), delay(1));
  }
}

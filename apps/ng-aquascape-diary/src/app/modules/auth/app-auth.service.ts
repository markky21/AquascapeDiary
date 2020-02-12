import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '@aquascape-diary/ui';
import { NbAuthService } from '@nebular/auth';
import { NbAuthResult } from '@nebular/auth/services/auth-result';
import { Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TIME_REDIRECT_AFTER_MESSAGE } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  public constructor(
    private nbAuthService: NbAuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  public logout(strategyName: string = 'email'): Observable<NbAuthResult> {
    return this.nbAuthService.logout(strategyName).pipe(
      tap(response => {
        response.isSuccess()
          ? this.toastService.success(response.getMessages(), 'Bye!')
          : this.toastService.danger(response.getMessages(), 'Upss..');
      }),
      tap(response => {
        response.isSuccess() &&
          timer(TIME_REDIRECT_AFTER_MESSAGE).subscribe(() =>
            this.router.navigate(['/'])
          );
      })
    );
  }

  public isAuthenticated(): Observable<boolean> {
    return this.nbAuthService.isAuthenticated();
  }
}

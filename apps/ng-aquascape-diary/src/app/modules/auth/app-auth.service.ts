import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '@aquascape-diary/ui';
import { NbAuthService } from '@nebular/auth';
import { NbAuthResult } from '@nebular/auth/services/auth-result';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
      tap(response => response.isSuccess() && this.router.navigate(['/']))
    );
  }

  public onAuthenticationChange(): Observable<boolean> {
    return this.nbAuthService.onAuthenticationChange();
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NbAuthService } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public constructor(
    private nbAuthService: NbAuthService,
    private router: Router
  ) {}
  public async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.nbAuthService
      .isAuthenticated()
      .toPromise()
      .then(isAuthenticated =>
        isAuthenticated
          ? true
          : this.router.navigate(['auth/login']).then(() => false)
      );
  }
}

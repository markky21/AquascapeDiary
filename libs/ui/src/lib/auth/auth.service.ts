import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthError, SubmitAction } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoading$ = new BehaviorSubject<boolean>(false);

  public constructor() {}

  public async onSubmit(
    user: any,
    action: SubmitAction
  ): Promise<void> {
    this.isLoading$.next(true);

    // const email = user.email;
    // const password = user.password;
    //
    // try {
    //   if (action === SubmitAction.LOGIN) {
    //     return await this.angularFireAuth.auth.signInWithEmailAndPassword(
    //       email,
    //       password
    //     );
    //   } else if (action === SubmitAction.REGISTER) {
    //     return await this.angularFireAuth.auth.createUserWithEmailAndPassword(
    //       email,
    //       password
    //     );
    //   } else if (action === SubmitAction.RESET) {
    //     return await this.angularFireAuth.auth.sendPasswordResetEmail(email);
    //   }
    // } catch (err) {
    //   return err;
    // }

    this.isLoading$.next(false);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { AuthError, SubmitAction } from './auth.model';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoading$ = new BehaviorSubject<boolean>(false);

  public constructor(private angularFireAuth: AngularFireAuth) {}

  public async onSubmit(
    user: any,
    action: SubmitAction
  ): Promise<UserCredential | AuthError | void> {
    this.isLoading$.next(true);

    const email = user.email;
    const password = user.password;

    try {
      if (action === SubmitAction.LOGIN) {
        return await this.angularFireAuth.auth.signInWithEmailAndPassword(
          email,
          password
        );
      } else if (action === SubmitAction.REGISTER) {
        return await this.angularFireAuth.auth.createUserWithEmailAndPassword(
          email,
          password
        );
      } else if (action === SubmitAction.RESET) {
        return await this.angularFireAuth.auth.sendPasswordResetEmail(email);
      }
    } catch (err) {
      return err;
    }

    this.isLoading$.next(false);
  }
}

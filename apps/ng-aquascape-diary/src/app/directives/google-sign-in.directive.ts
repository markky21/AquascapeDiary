import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[aquascapeDiaryGoogleSignIn]'
})
export class GoogleSignInDirective {
  constructor(private angularFireAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}

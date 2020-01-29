import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[aquascapeDiaryGoogleSignIn]'
})
export class GoogleSignInDirective {
  public constructor(private angularFireAuth: AngularFireAuth) {}

  @HostListener('click')
  public onclick() {
    console.log('clicked');
    this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}

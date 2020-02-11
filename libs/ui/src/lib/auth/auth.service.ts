import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthError, SubmitAction } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoading$ = new BehaviorSubject<boolean>(false);
}

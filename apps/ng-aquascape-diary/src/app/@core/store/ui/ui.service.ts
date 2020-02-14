import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UiStore } from './ui.store';

@Injectable({ providedIn: 'root' })
export class UiService {
  public constructor(private uiStore: UiStore, private http: HttpClient) {}

  // public get() {
  //   return this.http
  //     .get('')
  //     .pipe(tap(entities => this.uiStore.update(entities)));
  // }
}

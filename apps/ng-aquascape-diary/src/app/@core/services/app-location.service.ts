import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppLocation {
  public url$: Observable<string> = this.router.events.pipe(
    startWith(true),
    map(() => this.location.path()),
    distinctUntilChanged(),
    shareReplay(),
    tap(l => console.log('LOCATION CHANGE:', l))
  );

  public constructor(private router: Router, private location: Location) {}
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppLocation {
  url$: Observable<string> = this.router.events.pipe(
    map(() => this.location.path()),
    distinctUntilChanged(),
    shareReplay(),
    tap(l => console.log('location', l)),
  );

  constructor(private router: Router, private location: Location) {}
}

import { MonoTypeOperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Returns a deep copy of the object
 */
export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function copy<T>(): MonoTypeOperatorFunction<T> {
  return input$ => input$.pipe(map(v => deepCopy(v)));
}

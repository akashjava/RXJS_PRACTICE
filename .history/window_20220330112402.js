import { interval, Subject } from "rxjs";
import { window, mergeAll, map, take } from "rxjs/operators";

var d$ = new Subject();

const sec$ = interval(1000);

setInterval(() => {
  d$.next([]);
}, 5000);
const result = d$.pipe(
  window(sec$),
  map((win) => win.pipe(take(2))), // each window has at most 2 emissions
  mergeAll() // flatten the Observable-of-Observables
);
result.subscribe((x) => console.log(x));

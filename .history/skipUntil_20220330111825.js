import { interval, Subject } from "rxjs";
import { skipUntil } from "rxjs/operators";

const intervalObservable$ = interval(1000);
var d$ = new Subject();
setTimeout(() => {
  d$.next([]);
}, 10000);
intervalObservable$.pipe(skipUntil(d$)).subscribe((value) => console.log(value));

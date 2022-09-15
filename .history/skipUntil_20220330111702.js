import { interval, Subject} from 'rxjs';
import { skipUntil } from 'rxjs/operators';
 
const intervalObservable = interval(1000);
var d$=new Subject()

 
setTimeout(() => {
    d$.next([]);
}, 10000);
 
const emitAfterClick = intervalObservable.pipe(
  skipUntil(d$)
);
const subscribe = emitAfterClick.subscribe(value => console.log(value));
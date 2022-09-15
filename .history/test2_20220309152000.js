import { range, filter ,of,map,withLatestFrom, merge, Subject} from 'rxjs';
var old$=of([1,2,3,4,5,6])
var d$=new Subject()
var value=1000;
var newO$=of([7,8,9,10,11,12])
// old$.subscribe(res=>{
//     console.log(res);
// })
// newO$.pipe(withLatestFrom(old$)).subscribe(res=>{
//     console.log(res);
// })
d$.pipe(withLatestFrom(newO$),map(res=>([...res[0],...res[1]]))).subscribe(res=>{
    console.log(res);
})
setInterval(() => {
    old$.next([value]);
    value+=1000;
}, 1000);

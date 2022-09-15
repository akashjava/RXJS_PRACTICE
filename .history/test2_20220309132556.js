import { range, filter ,of,map,withLatestFrom, merge} from 'rxjs';
var old=of([1,2,3,4,5,6])
var newO=of([7,8,9,10,11,12])
old.subscribe(res=>{
    console.log(res);
})
merge(old.pipe(withLatestFrom()),newO).subscribe(res=>{
    console.log(res);
})

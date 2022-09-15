import { range, filter ,of,map,withLatestFrom} from 'rxjs';
var old=of([1,2,3,4,5,6])
var newO=of([7,8,9,10,11,12])
old.subscribe(res=>{
    console.log(res);
})

import { range, filter, map ,of} from 'rxjs';
var old=of([1,2,3,4,5,6])
old.subscribe(res=>{
    console.log(res);
})

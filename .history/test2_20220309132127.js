import { range, filter ,of} from 'rxjs';
import { map,tap} from 'rxjs/operators';
var old=of([1,2,3,4,5,6])
old.pipe().subscribe(res=>{
    console.log(res);
})

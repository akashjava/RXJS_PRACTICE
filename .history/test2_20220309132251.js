import { range, filter ,of,map} from 'rxjs';
var old=of(1,2,3,4,5,6)
old.pipe(map(r=>r*2)).subscribe(res=>{
    console.log(res);
})

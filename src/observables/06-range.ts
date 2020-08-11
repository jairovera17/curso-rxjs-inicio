import {of, range, asyncScheduler} from "rxjs";

const src$ = of(1,2,3,4,5);
const obs$ = range(1,5);
const obs2$ = range(1,5, asyncScheduler);
//El resultado es el mismo

src$.subscribe(console.log)
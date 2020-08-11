import { of } from "rxjs";

//of es síncrono
//of(1,2,3,4,5) === from([1,2,3,4,5])
const obs$ = of(1, 2, 3, 4, 5, 6);

console.log("Inicio del observable");
obs$.subscribe(
    next => console.log("next value", next),
    null,
    () => console.log("sequence complete"))
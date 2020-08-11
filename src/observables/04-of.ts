import { of } from "rxjs";

//of es síncrono
const obs$ = of(1, 2, 3, 4, 5, 6);

console.log("Inicio del observable");
obs$.subscribe(
    next => console.log("next value", next),
    null,
    () => console.log("sequence complete"))
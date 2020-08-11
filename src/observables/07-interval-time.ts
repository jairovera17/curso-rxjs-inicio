import { interval, timer } from "rxjs";

const observer = {
    next: value => console.log("next: ", value),
    complete: () => console.log("completado")
}

const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5);
//Interval and timer are async
const interval$ = interval(1000);
//const timer$ = timer(2500);
const timer$ = timer(todayIn5);

console.log("Inicio");
timer$.subscribe(observer);
console.log("Fin del sript")
import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log(`next: ${value}`),
    error: error => console.warn(`error: ${error}`),
    complete: () => console.log("Completed")
}

const interval$ = new Observable(subs => {
    const intervalID = setInterval(() => subs.next(Math.random()), 2500);
    return () => {
        clearInterval(intervalID);
        console.log("Intervalo destruido");
    };
})

const subject$ = new Subject();
const subscriber = interval$.subscribe(subject$);

const sub1 = subject$.subscribe(rnd => console.log("sub1", rnd));
const sub2 = subject$.subscribe(rnd => console.log("sub2", rnd));


setTimeout(() => {
    subject$.next(10);
    subject$.complete();
}, 3000)

setTimeout(() => {
    subscriber.unsubscribe();
}, 6000)
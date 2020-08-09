import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log(`next: ${value}`),
    error: error => console.warn(`error: ${error}`),
    complete: () => console.log("Completed")
}

const interval$ = new Observable(sub => {
    let count = 0;

    const interval = setInterval(() => {
        count++;
        sub.next(count);
    }, 1000);

    return () => {
        //Esto se ejecuta en .unsubscribe;
        clearInterval(interval);
        console.log("Intérvalo destruido");
    }
})

const subscriber1 = interval$.subscribe(console.log);
const subscriber2 = interval$.subscribe(console.log);
const subscriber3 = interval$.subscribe(console.log);


setTimeout(() => {
    subscriber1.unsubscribe();
    subscriber2.unsubscribe();
    subscriber3.unsubscribe();
}, 3000)
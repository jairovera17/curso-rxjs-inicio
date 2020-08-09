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

    setTimeout(() => {
        sub.complete();
        console.log("completado");
    }, 2500)

    return () => {
        //Esto se ejecuta en .unsubscribe o .complete;
        clearInterval(interval);
        console.log("Intérvalo destruido");
    }
})

const subscriber1 = interval$.subscribe(observer);
const subscriber2 = interval$.subscribe(observer);
const subscriber3 = interval$.subscribe(observer);

subscriber1.add(subscriber2)
    .add(subscriber3)


setTimeout(() => {
    subscriber1.unsubscribe();
    console.log("Timeout completado");
}, 3000)
import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log(`Next value is: ${value}`),
    error: error => console.warn(`Error: ${error}`),
    complete: () => console.log("Completed")
}

const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("Mundo");

    // const a = undefined;
    // a.name = "Jairo";

    subs.complete();
    //Los siguientes valores no seán subscritos
    subs.next("Aloooooo");
});

obs$.subscribe(observer)

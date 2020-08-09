import { Observable } from "rxjs";

const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("Mundo");

    subs.complete();
    //Los siguientes valores no seán subscritos
    subs.next("Aloooooo");
});

obs$.subscribe(console.log)
import { Observable } from "rxjs";

const obs$ = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("Mundo");

    const a = undefined;
    a.name = "Jairo";

    subs.complete();
    //Los siguientes valores no seán subscritos
    subs.next("Aloooooo");
});

obs$.subscribe(
    value => console.log(`El valor es ${value}`),
    error => console.warn(`El error es ${error}`),
    () => console.log("Completado")
)
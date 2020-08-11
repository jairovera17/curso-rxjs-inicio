import { from } from "rxjs";

const observer = {
    next: value => console.log("next:", value),
    complete: () => console.log("completado")
}


const generateNumber = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

from(generateNumber()).subscribe(observer);
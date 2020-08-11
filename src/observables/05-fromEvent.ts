import { fromEvent } from "rxjs";

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
    next: val => console.log("Next", val)
}

src1$.subscribe(observer);
src2$.subscribe(event => console.log(event.key))


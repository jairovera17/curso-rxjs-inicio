import { asyncScheduler, async } from "rxjs";

const greet = name => console.log("Hi bro", name);

asyncScheduler.schedule(greet, 2000, "Fulanito");

const subscription = asyncScheduler.schedule(function (state) {
    console.log(state);
    this.schedule(state + 1, 1000);
}, 1000, 0)

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
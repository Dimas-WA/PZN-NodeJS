import timers from "timers/promises";

console.info(Date());
await timers.setTimeout(5000);
console.info(Date());


// for await (const startTime of timers.setInterval(1000)){
//     console.info(`Start Time at ${Date()}`);
// }
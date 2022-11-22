import { EventEmitter } from "events";

const emiter = new EventEmitter();

emiter.addListener("hello", (name)=>{
    console.info(`Hello ${name}`);
})
emiter.addListener("hello", (name)=>{
    console.info(`Halo ${name}`);
})

emiter.emit("hello", "eko");
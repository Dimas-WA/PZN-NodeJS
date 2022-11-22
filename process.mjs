import process, { exitCode } from "process";

process.addListener("exit", (exitCode)=> {
    console.info(`Node Js exit with code ${exitCode}`);
})

console.info(process.version);
console.info(process.argv);
console.info(process.env);
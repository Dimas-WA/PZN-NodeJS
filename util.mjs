import util from "util";

const firstName = "Eko";
const lastName = "Khannedy";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

// json data 

const person = {
    firstName: "Eko",
    lastName: "Khannedy"
}

console.info(`person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
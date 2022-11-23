const buffer = Buffer.from("Dimas WIsnu", "utf8");


console.info(buffer.toString());

console.info(buffer.toString("hex"));

console.info(buffer.toString("base64"));

// buffer.reverse();
// console.info(buffer.toString());

const bufferBase64 = Buffer.from("RGltYXMgV0lzbnU=", "base64");
console.info(bufferBase64.toString("utf8"));
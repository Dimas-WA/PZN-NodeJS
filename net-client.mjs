import net from "net";

const client = net.createConnection({
    port: 3000,
    host: "localhost"
});

client.addListener("data", (data)=>{
    console.info(`Received data from server : ${data.toString()}`)
});

setInterval(()=>{
    client.write("Eko\r\n");
}, 2000);
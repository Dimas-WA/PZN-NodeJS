import net from "net";

const server = net.createServer((client)=>{
    console.info("Client COnected");
    client.addListener("data", (data)=>{
        console.info(`Receive data from ${data}`);
        client.write(`hello ${data.toString()} \r\n`);
    })
});

server.listen(3000, "localhost");
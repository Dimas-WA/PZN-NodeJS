import http, { request } from "http";

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);
    // console.info(request.headers);


    if (request.method == "POST") {
    
        request.addListener("data", (data)=>{
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        })
        
    } else {
        
        if (request.url == "/eko") {
            
            response.write("Hello Eko");
        } else {
            
            response.write("Hello http server");
        }
        response.end();
    }


});

server.listen(3000);
import * as net from "net";

const server = net.createServer((socket) => {
    socket.on("data", (data)=>{
        const request = data.toString();
        const dataArr = request.split("\r\n");
        const requestLine = dataArr[0];
        const requestLineArr = requestLine.split(" ");
        const method = requestLineArr[0];
        const path = requestLineArr[1];
        const httpVersion = requestLineArr[2];
        if(method === "GET" && path === "/" && httpVersion === "HTTP/1.1"){
            socket.write("HTTP/1.1 200 OK\r\n\r\n");
        }else{
            socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
        }
        socket.end();
        
    });
});
server.listen(4221, () => {
    console.log("Server is listening on port 4221");
});
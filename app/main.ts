import * as net from "net";
import { Buffer } from "buffer";
console.log("Logs from your program will appear here!");

const server = net.createServer((socket) => {
    socket.write(`HTTP/1.1 200 OK\r\n\r\n`);
    socket.end();
});


server.listen(4221, "localhost");

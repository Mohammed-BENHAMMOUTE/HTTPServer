"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var server = net.createServer(function (socket) {
    socket.on("data", function (data) {
        var request = data.toString();
        var dataArr = request.split("\r\n");
        var requestLine = dataArr[0];
        var requestLineArr = requestLine.split(" ");
        var method = requestLineArr[0];
        var path = requestLineArr[1];
        var httpVersion = requestLineArr[2];
        if (method === "GET" && path === "/" && httpVersion === "HTTP/1.1") {
            socket.write("HTTP/1.1 200 OK\r\n\r\n");
        }
        else {
            socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
        }
        socket.end();
    });
});
server.listen(4221, function () {
    console.log("Server is listening on port 4221");
});

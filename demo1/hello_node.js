const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("--Hello Node.js\n");
//   })
//   .listen(3000, "127.0.0.1");

console.log("Server running at http://127.0.0.1:3000/");

module.exports = () => {
  console.log("hello node");
};

// 1 引用了Node.js内置的http模块
// 2 通过http.createServer创建了一个http服务
// 3 通过listen方法，指定端口和ip，启动该服务
// 4 res是http协议里的response（响应）的别名，通过res控制对浏览器的操作，设置返回状态码是200，
//   设置header里的'Content-Type'是'text/plain'类型，最后返回'Hello Node.js\n'文本。

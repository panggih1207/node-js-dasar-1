console.log("Hello Node.js");


const tambah = require("./math");

console.log(tambah(5, 3));


const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello dari server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
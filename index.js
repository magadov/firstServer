const http = require ('http');

const server = http.createServer((req, res) =>{
  res.writeHead(200)

  res.write("Привет мир..")

  res.end()
})

server.listen(3000);
console.log(1212)
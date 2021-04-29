const http = require('http');
const fs = require('fs');
const path = require ('path');
const server = http.createServer((req, res) =>{
  res.writeHead(200)

  fs.readFile(path.resolve(__dirname, 'pages', 'index.html'), (err, data)=>{
    res.write(data.toString());

    res.end();
  })

})

server.listen(3000);

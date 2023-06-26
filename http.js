const http = require('http');

const PORT = 5001;
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(req.url);
  res.end('Hello from the server 222');
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

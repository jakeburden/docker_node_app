const http = require('http')
const fs = require('fs')
const port = 9090

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.createReadStream('index.html')
      .pipe(res)
  } else res.end('404')
}).listen(port, () => {
  console.log(`Running on http://127.0.0.1:${port}`)
})

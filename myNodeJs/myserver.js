const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
    let path = "mypage/"
    switch (req.url) {
        case '/':
            path += 'index.html'
            break
        case '/menu':
            path += 'menu.html'
            break
        default:
            path += '404.html'
            break
    }
   
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }else{
            res.end(data)
          }
    })
})

server.listen(8000, 'localhost', () => {
    console.log('listening for requests localhost:8000')
})

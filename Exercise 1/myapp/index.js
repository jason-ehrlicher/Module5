const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World from mayapp!')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
    })

app.listen(port, () => {
console.log(`myapp listening
at http://localhost:${port}`)
})
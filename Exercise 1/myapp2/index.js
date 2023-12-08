const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
res.send('Hello World from mayapp2!')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
    })

app.listen(port, () => {
console.log(`myapp2 listening
at http://localhost:${port}`)
})
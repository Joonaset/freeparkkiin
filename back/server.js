const express = require('express')
const app = express()
const port = 3000

app.get('/spots', (req, res) => {
  var params = new URL(req.url, 'localhost:3000/').searchParams
  res.send(params)
})

app.put('/spots', (req, res) => {

})

app.delete('/spots', (req, res) => {

})

app.post('/spots', (req, res) => {
  res.send('POST request to spots')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

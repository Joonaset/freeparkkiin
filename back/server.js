const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000
const dbuser = process.env.DBUSER
const dbpass = process.env.DBPASS


console.log(dbuser + dbpass)

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ParkDB'
})

app.use(express.urlencoded())
app.use(express.json())

app.route('/spots')
  .get(async function (req, res) {
    var sql = 'SELECT * from Spots WHERE Flag < 5'
    con.query(sql, await function (err, result, fields) {
      if (err) throw err
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    })
  })

  .put((req, res) => {

  })

  .delete((req, res) => {

  })

  .post((req, res) => {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('done')
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

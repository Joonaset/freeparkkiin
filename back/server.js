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

app.use(express.urlencoded({ extended: false }))
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
    var spot = {
      Latitude: mysql.escape(req.body.latitude),
      Longitude: mysql.escape(req.body.longitude),
      Address: mysql.escape(req.body.address),
      Hours: mysql.escape(req.body.hours),
      Restricted_Days: mysql.escape(req.body.days)
    }
    if (spot.Hours === 'NULL') {
      spot.Hours = 0
    }
    var sql = 'INSERT INTO Spots SET ?;'
    if (spot.Latitude === 'NULL' || spot.Longitude === 'NULL') {
      res.writeHead(501, { 'Content-Type': 'text/html' })
      res.end('latitude and longitude required')
      return
    }
    con.query(sql, spot, function (err, result, fields) {
      if (err) throw err
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end('New entry Inserted')
    })
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

'use strict'

const express = require('express')
const app = express()

const port = process.env.port || 8000

app.get('/', function (req, res, next) {
  res.send({ hello: 'world', name: 'John Serrano' })
})

app.listen(port, () => {
  console.log(`On server in listening at http://localhost:${port}`)
})

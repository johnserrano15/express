'use strict'

const express = require('express')
const app = express()
const path = require('path')
const productsRouter = require('./routes/products')
const productsApiRouter = require('./routes/api/products')
const bodyParser = require('body-parser')

const port = process.env.port || 8000

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/products', productsRouter)
app.use('/api/products', productsApiRouter)

app.use(bodyParser.json())

app.listen(port, function () {
  console.log(`Listening http://localhost:${port}`)
})

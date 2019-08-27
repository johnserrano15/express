'use strict'

const express = require('express')
const app = express()
const path = require('path')
const productsRouter = require('./routes/products')

const port = process.env.port || 8000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/products', productsRouter)

app.listen(port, function () {
  console.log(`Listening http://localhost:${port}`)
})

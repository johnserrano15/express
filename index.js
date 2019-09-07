'use strict'

const express = require('express')
const path = require('path')
const boom = require('boom')
const debug = require('debug')('app:server')
const bodyParser = require('body-parser')
const productsRouter = require('./routes/views/products')
const productsApiRouter = require('./routes/api/products')
const authApiRouter = require('./routes/api/auth')

const {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler
} = require('./utils/middlewares/errorsHandlers')

const isRequestAjaxOrApi = require('./utils/isRequestAjaxOrApi')

// App
const app = express()

// On port
const port = process.env.port || 8000

// Middlewares
app.use(bodyParser.json())

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Routes
app.use('/products', productsRouter)
productsApiRouter(app)
app.use('/api/auth', authApiRouter)

// Redirect
app.get('/', (req, res) => {
  res.redirect('/products')
})

app.use(function (req, res, next) {
  if (isRequestAjaxOrApi(req)) {
    const {
      output: { statusCode, payload }
    } = boom.notFound()

    res.status(statusCode).json(payload)
  }

  res.status(404).render('404')
})

// error handlers
app.use(logErrors)
app.use(wrapErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

// Server
app.listen(port, function () {
  debug(`Listening http://localhost:${port}`)
  // console.log(`Listening http://localhost:${port}`)
})

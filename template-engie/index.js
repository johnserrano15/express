const express = require('express')
const app = express()
const expressJsx = require('./express-jsx')

const port = process.env.port || 8000

app.engine('jsx', expressJsx) // El template jsx es solo de ejemplo esto no correo templates de jsx como tal de react
app.set('views', './views')
app.set('view engine', 'jsx')

app.get('/', function (req, res) {
  res.render('index', { hello: 'hola', world: 'mundo genial' })
})

app.listen(port, function () {
  console.log(`Listening http://localhost:${port}`)
})

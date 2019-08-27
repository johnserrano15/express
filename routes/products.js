const epxress = require('express')
const router = epxress.Router()

const productMocks = require('../utils/mocks/products')

router.get('/', (req, res) => {
  res.render('products', { productMocks })
})

module.exports = router

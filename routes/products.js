const epxress = require('express')
const router = epxress.Router()

const products = [
  {
    name: 'Red shoes',
    price: 80
  },
  {
    name: 'Black bike',
    price: 200
  }
]

router.get('/', (req, res) => {
  res.render('products', { products })
})

module.exports = router

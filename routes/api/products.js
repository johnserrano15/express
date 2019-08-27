const epxress = require('express')
const router = epxress.Router()
const productMocks = require('../../utils/mocks/products')

router.get('/', (req, res) => {
  const { query } = req.query

  res.status(200).json({
    data: productMocks,
    message: 'products listed'
  })
})

router.get('/:productId', (req, res) => {
  const { productId } = req.params

  res.status(200).json({
    data: productMocks[0],
    message: 'product retrieved'
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    data: productMocks[0],
    message: 'products listed'
  })
})

router.put('/:productId', (req, res) => {
  res.status(200).json({
    data: productMocks,
    message: 'products updated'
  })
})

router.delete('/', (req, res) => {
  res.status(200).json({
    data: productMocks[0],
    message: 'products deleted'
  })
})

module.exports = router

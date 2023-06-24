const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.showProducts)
router.get('/create', ProductController.createProduct)
router.get('/:id',ProductController.getProduct)
router.get('/remove/:id',ProductController.removeProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)
router.post('/create', ProductController.postCreate)

module.exports = router
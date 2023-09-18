const { Router } = require('express');
const { productsController } = require('../controllers/products.controllers');
const router = Router();


router.get('/products', productsController.getProducts);

router.get('/products/:id', productsController.getProductsId);

router.post('/products', productsController.postProducts);

router.delete('/products/:id', productsController.postProductsDelete);

module.exports = router;
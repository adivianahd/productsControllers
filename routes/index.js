var express = require('express');
const ProductsControllers = require('../controller/ProductsControllers');

var router = express.Router();
const ProductsInstance = new ProductsControllers();

router.get('/products', (req, res, ) => {
  ProductsInstance.getProducts(req, res);
});

router.post('/products', (req, res, ) => {
  ProductsInstance.addProduct(req, res);
});

router.get('/products/:category', (req, res, ) => {
  ProductsInstance.findProductByCategory(req, res);

});




module.exports = router;

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

router.get('/products/id/:category', (req, res, ) => {
  ProductsInstance.findProductById(req, res);

});
router.get('/products/price/:price', (req, res, ) => {
  ProductsInstance.findProductByRank(req, res);

});

router.put('/products/:id', (req, res) => {
  ProductsInstance.modifyProduct(req, res)
})

module.exports = router;



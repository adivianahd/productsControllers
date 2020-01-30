const express = require('express');
const router = express.Router();

const ProductsControllers = require('../controller/ProductsControllers');
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

router.get('/products/id/:id', (req, res, ) => {
  ProductsInstance.findProductById(req, res);

});
router.get('/products/price/:price', (req, res, ) => {
  ProductsInstance.findProductByRank(req, res);

});

router.put('/products/:id', (req, res) => {
  ProductsInstance.modifyProduct(req, res)
});


router.delete('/products/:id', (req, res) => {
  ProductsInstance.deleteProduct(req, res);
});

router.get('/github', (req, res) => {
  UserInstance.getGithubProfile(req, res)
})

module.exports = router;

const ProductController = require('../controllers/productController');

async function productRoutes(fastify, options) {
  // Ruta GET '/product'
  fastify.get('/product', ProductController.getAllProducts);

  // Ruta GET '/product/:id'
  fastify.get('/product/:id', ProductController.getProductById);

  // Ruta POST '/product'
  fastify.post('/product', ProductController.createProduct);

  // Ruta PUT '/product/:id'
  fastify.put('/product/:id', ProductController.updateProduct);

  // Ruta DELETE '/product/:id'
  fastify.delete('/product/:id', ProductController.deleteProduct);
}

module.exports = productRoutes;

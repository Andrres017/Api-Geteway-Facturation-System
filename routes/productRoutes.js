const ProductController = require('../controllers/productController');

async function productRoutes(fastify, options) {
  // Ruta GET '/product'
  fastify.get('/product', ProductController.getAllProducts);

  // Ruta GET '/product/:id'
  fastify.get('/product/:id', ProductController.getProductById);

  // Ruta POST '/product'
  fastify.post('/product', { schema: { body: fastify.ajv.compile(fastify.schemas.createProductSchema) } }, ProductController.createProduct);

  // Ruta PUT '/product/:id'
  fastify.put('/product/:id', { schema: { body: fastify.ajv.compile(fastify.schemas.updateProductSchema) } }, ProductController.updateProduct);

  // Ruta DELETE '/product/:id'
  fastify.delete('/product/:id', ProductController.deleteProduct);
}

module.exports = productRoutes;

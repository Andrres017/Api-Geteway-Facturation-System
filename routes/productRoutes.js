const fastify = require('fastify')();
const ProductController = require('../controllers/productController');
const {
  createProductSchema,
  updateProductSchema,
} = require('../validations/productValidation');

// Ruta GET '/product'
fastify.get('/product', ProductController.getAllProducts);

// Ruta GET '/product/:id'
fastify.get('/product/:id', ProductController.getProductById);

// Ruta POST '/product'
fastify.post('/product', { schema: { body: createProductSchema } }, ProductController.createProduct);

// Ruta PUT '/product/:id'
fastify.put('/product/:id', { schema: { body: updateProductSchema } }, ProductController.updateProduct);

// Ruta DELETE '/product/:id'
fastify.delete('/product/:id', ProductController.deleteProduct);

module.exports = fastify;

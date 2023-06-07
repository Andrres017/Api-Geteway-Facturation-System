const ProductService = require('../services/productService');

class ProductController {
  async getAllProducts(req, reply) {
    try {
      const products = await ProductService.getAllProducts();
      reply.send(products);
    } catch (error) {
      reply.status(500).send({ error: 'Error al obtener los productos' });
    }
  }

  async getProductById(req, reply) {
    const { id } = req.params;
    try {
      const product = await ProductService.getProductById(id);
      reply.send(product);
    } catch (error) {
      reply.status(404).send({ error: 'Producto no encontrado' });
    }
  }

  async createProduct(req, reply) {
    const { body } = req;
    try {
      const product = await ProductService.createProduct(body);
      reply.code(201).send(product);
    } catch (error) {
      reply.status(500).send({ error: 'Error al crear el producto' });
    }
  }

  async updateProduct(req, reply) {
    const { id } = req.params;
    const { body } = req;
    try {
      const product = await ProductService.updateProduct(id, body);
      reply.send(product);
    } catch (error) {
      reply.status(404).send({ error: 'Producto no encontrado' });
    }
  }

  async deleteProduct(req, reply) {
    const { id } = req.params;
    try {
      const response = await ProductService.deleteProduct(id);
      reply.send(response);
    } catch (error) {
      reply.status(404).send({ error: 'Producto no encontrado' });
    }
  }
}

module.exports = new ProductController();

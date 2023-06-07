const Product = require('../models/Product');

class ProductService {
  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error('Error al obtener los productos');
    }
  }

  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto');
    }
  }

  async createProduct(productData) {
    try {
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      throw new Error('Error al crear el producto');
    }
  }

  async updateProduct(id, productData) {
    try {
      const product = await Product.findByIdAndUpdate(id, productData, { new: true });
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    } catch (error) {
      throw new Error('Error al actualizar el producto');
    }
  }

  async deleteProduct(id) {
    try {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return { message: 'Producto eliminado correctamente' };
    } catch (error) {
      throw new Error('Error al eliminar el producto');
    }
  }
}

module.exports = new ProductService();

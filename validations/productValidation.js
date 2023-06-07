const createProductSchema = {
  type: 'object',
  properties: {
    nombre: { type: 'string' },
    descripcion: { type: 'string' },
    precio: { type: 'number' }
  },
  required: ['nombre', 'descripcion', 'precio']
};

const updateProductSchema = {
  type: 'object',
  properties: {
    nombre: { type: 'string' },
    descripcion: { type: 'string' },
    precio: { type: 'number' }
  }
};

module.exports = {
  createProductSchema,
  updateProductSchema
};

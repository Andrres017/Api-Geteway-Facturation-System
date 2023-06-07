const Joi = require('joi');

const createProductSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().required(),
  precio: Joi.number().required(),
});

const updateProductSchema = Joi.object({
  nombre: Joi.string(),
  descripcion: Joi.string(),
  precio: Joi.number(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
};

const Joi = require('joi')
/*
 Joi ha sido descontinuado y ya no recibe soporte, por lo que seguir usándolo puede provocar errores y fallas en la seguridad.
Ha sido remplazado por @hapi/joi, su uso ha cambiado más bien poco.
https://www.npmjs.com/package/@hapi/joi
*/

const productIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)
const productTagSchema = Joi.array().items(Joi.string().max(10))

const createProductSchema = {
  name: Joi.string()
    .max(50)
    .required(),
  price: Joi.number()
    .min(1)
    .max(1000000),
  image: Joi.string().required(),
  tags: productTagSchema
}

const updateProductSchema = {
  name: Joi.string().max(50),
  price: Joi.number()
    .min(1)
    .max(1000000),
  image: Joi.string(),
  tags: productTagSchema
}

module.exports = {
  productIdSchema,
  productTagSchema,
  createProductSchema,
  updateProductSchema
}

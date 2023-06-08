const {createProductSchema,updateProductSchema} = require("./schema/productSchema");

const Ajv = require('ajv');
const ajv = new Ajv()

const validationCreateSchema=(body)=>{
  
  const validate = ajv.compile(createProductSchema)
  validate(body)
  return(validate.errors)
 
}

module.exports = {
  validationCreateSchema
}
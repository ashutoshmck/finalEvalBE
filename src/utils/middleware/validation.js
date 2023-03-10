const Joi = require('joi');


const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};

const fieldSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  type: Joi.string().min(3).max(50).required(),
});

const contentTypeSchema = Joi.object({
  name: Joi.string().min(3).max(50).required()
});

const recordSchema = Joi.object({
  content: Joi.object().required(),
});

module.exports = { validationMiddleware, fieldSchema, contentTypeSchema, recordSchema };
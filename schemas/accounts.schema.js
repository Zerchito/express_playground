const Joi = require('joi');

const id = Joi.string.uuid();
const name = Joi.string.alphanum().min(3).max(1);
const amount = Joi.number().integer().min(0);

const createAccountSchema = Joi.object({
  name: name.required(),
  totalAmount: amount
})

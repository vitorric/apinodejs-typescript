import Joi from 'joi';

const objectIdRequiredJoi = (title: string): Joi.StringSchema =>
  Joi.string()
    .length(24)
    .required()
    .messages({
      'string.length': `"${title}" formato incorreto.`,
      'string.empty': `"${title}" não é permitido valor vazio.`,
      'any.required': `"${title}" é um campo requirido.`,
    });

export { objectIdRequiredJoi };

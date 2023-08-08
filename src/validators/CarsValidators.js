import Joi from "joi";

export const CarsValidators = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Bran must consist only of letters min 1 max 20 characters',
        'string.required': 'Brand is required'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "string.min": "Price must be at least {#limit} characters",
        "string.max": "Price must be at most {#limit} characters",
        "string.required": "Price is required",
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        "string.min": "Year must be at least {#limit} characters",
        "string.max": "Year must be at most {#limit} characters",
        "string.required": "Year is required",
    }),
});






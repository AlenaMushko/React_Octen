import Joi from "joi";

export const LoginValidators = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Name must consist only of letters min 1 max 20 characters',
        'string.required': 'Name is required'
    }),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,30})'))
        .required().messages({
            "string.pattern.base": "Password must have at least one uppercase letter, one lowercase letter, one number, and be between 8 to 30 characters long",
            "string.required": "Password is required",
        }),
});

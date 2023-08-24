import Joi from "joi";

export const RegisterValidators = Joi.object({
    username: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Name must consist only of letters min 1 max 20 characters',
        'string.required': 'Name is required'
    }),
    password: Joi.string()
        .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/)
        .min(1)
        .max(128)
        .required()
        .messages({
            "string.pattern.base": "Password must have at least one uppercase letter, one lowercase letter, one number, one non-alpha numeric character and be between 8 to 20 characters long",
            "string.required": "Password is required",
        }),
});

import Joi from "joi";

export const UsersValidators = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        "string.min": "Name must be at least {#limit} characters",
        "string.max": "Name must be at most {#limit} characters",
        "string.required": "Name is required",
    }),
    username: Joi.string().min(3).max(20).required().messages({
        "string.min": "Username must be at least {#limit} characters",
        "string.max": "Username must be at most {#limit} characters",
        "string.required": "Username is required",
    }),
    address: Joi.string().min(3).max(100).required().messages({
        "string.min": "Address must be at least {#limit} characters",
        "string.max": "Address must be at most {#limit} characters",
        "string.required": "Address is required",
    }),
    phone: Joi.number().required().messages({
        "string.required": "Phone is required",
    }),
    email: Joi.string().email({tlds: {allow: false}}).required().messages({
        "string.email": "Email must be a valid email",
        "string.required": "Email is required",
    }),
    website: Joi.string().messages({
        "string.required": "Website is required",
    }),
    company: Joi.string().min(3).max(50).required().messages({
        "string.min": "Company must be at least {#limit} characters",
        "string.max": "Company must be at most {#limit} characters",
        "string.required": "Company is required",
    }),
});


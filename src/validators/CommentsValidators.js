import Joi from "joi";

export const CommentsValidators = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        "string.min": "Name must be at least {#limit} characters",
        "string.max": "Name must be at most {#limit} characters",
        "string.required": "Name is required",
    }),
    email: Joi.string().email({tlds: {allow: false}}).required().messages({
        "string.email": "Email must be a valid email",
        "string.required": "Email is required",
    }),
    body: Joi.string().min(3).max(100).required().messages({
        "string.min": "Message must be at least {#limit} characters",
        "string.max": "Messages must be at most {#limit} characters",
        "string.required": "Message is required",
    }),
});


const Joi = require('joi');

const userValidate = (data: any) => {
    const newLocal = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(6).required(),
        phone: Joi.string().required()
    });
    const userSchema = newLocal;
    return userSchema.validate(data);
};

const choresValidate = (data: any) => {
    const newLocal = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        deadline: Joi.string(),
        teacher: Joi.string()
    });
    const choresSchema = newLocal;
    return choresSchema.validate(data);
};

module.exports = {
    userValidate, choresValidate
}
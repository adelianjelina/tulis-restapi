const Joi = require('joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        usernama: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)

}

const LoginValidation = (data) => {
    const schema = Joi.object({
        usernama: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)

}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
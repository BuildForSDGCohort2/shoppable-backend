const joi = require('@hapi/joi')

const signupChecks = (data) =>{
    const Validation = joi.object({
        name: joi.string().required(),
        email:joi.string().required().email(),
        password: joi.string().required()
    })
    return Validation.validate(data)
}

const signinChecks = (data) =>{
    const Validation = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required()
    })
    return Validation.validate(data)
}

module.exports.signupChecks = signupChecks
module.exports.signinChecks = signinChecks
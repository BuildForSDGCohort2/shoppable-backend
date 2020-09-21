const express = require('express')
const router = express.Router()
const User = require('../model/usermodel')
const { signupChecks, signinChecks} = require('../authValidation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


router.post('/signup', async (request, response) =>{
    
    //validate fields in sign up
    const {error} = signupChecks(request.body)
    if(error) {
        return response.status(400). send(error.details[0].message)
    }

    //same email can t sign up twice
    const sameEmail = await User.findOne({email: request.body.email})
    if (sameEmail){
        return response.status(400).send('Email already exists')
    }

    //salting passwords
    const saltPassword = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(request.body.password, saltPassword)

    const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: hashedPassword,
        isAdmin: signinUser.isAdmin
    })
    user.save()
    .then(users => {response.json(users)})
    .catch(error => {response.json(error)})
})

//login or sign in
router.post('/signin', async (request, response) =>{
    //validate fields
    const {error} = signinChecks(request.body)
    if(error) {
        return response.status(400).send(error.details[0].message)
    }

    //search for entered email in database
    const customer = await User.findOne({email: request.body.email})
    if (!customer) {
        return response.status(400).send('Cannot find your email')
    } else {
        const correctPassword = await bcrypt.compare(request.body.password, customer.password)
        response.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin
        })
        if(!correctPassword) {
            return response.status(400).send('Incorrect password')
        }
    }

    const sessToken = jwt.sign({_id: customer.id}, process.env.TOKEN)
    response.header('auth_id', sessToken).send(sessToken)

    response.send('Logged in sucessfully')

})

router.get('/createadmin', async (request, response) => {
    const user = new User({
        name:'Deborah',
        email: 'deborahtrez12@gmail.com',
        password: 'godlovesme',
        isAdmin: true
    })
    user.save()
    .then(users => {response.send(users)})
    .catch(error => {response.send(error)})
})

// router.post('/signin', async (request, response) => {
//     const signinUser = await User.findOne({
//         email: request.body.email,
//         password: request.body.password
//     })
//     if(signinUser){
//         response.send({
//             _id: signinUser.id,
//             name: signinUser.name,
//             email: signinUser.email,
//             isAdmin: signinUser.isAdmin
//         })
//     } else{
//         response.status(401).send({msg: 'Invalid email or password'})
//     }

// })

module.exports = router
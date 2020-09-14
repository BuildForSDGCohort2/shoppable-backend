const express = require('express')
const router = express.Router()
const products = require('../model/productsmodel')

//get all products from the database
router.get('/', (request, response) =>{
    products.find()
    .then(products => {response.json(products)})
    .catch(error => {response.json(error)})
})

//display one product
router.get('/:id', (request, response) => {
    products.findbyId(request.params.id)
    .then(products => {response.json(products)})
    .catch(error => {response.json(error)})
})

//post an item to the db
router.post('/create', (request, response) =>{
    const product = new products({
        name: request.body.name,
        category: request.body.category,
        image: request.body.image,
        price: request.body.price,
        description: request.body.description,
        brand: request.body.brand,
        rating: request.body.rating,
        numReviews: request.body.numReviews
    })

    product.save()
    .then(products => {response.json(products)})
    .catch(error => {response.json(error)})
})

module.exports = router
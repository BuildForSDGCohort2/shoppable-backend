const express =  require ('express')
const router = express.Router()
const productsmodel = require('../models/data')

//display all the products in the db
router.get('/', (request, response) => {
    productsmodel.find()
    .then(products => {response.json(products)})
    .catch(error => {response.json(error)})
})

//enter new product details in DB
router.post('/create', (request, response)=>{
    const product = new productsmodel({
        name: request.body.image,
        category: request.body.image,
        image: request.body.image,
        price: request.body.image,
        brand: request.body.brand,
        rating: request.body.rating,
        numReviews: request.body.numReviews
    })

    product.save()
    .then(products => {response.json(products)})
    .catch(error => {response.json(error)})
})

module.exports = router

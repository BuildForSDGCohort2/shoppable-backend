const express =  require ('express')
const router = express.Router()
const productsmodel = require('../models/data')

//display all the products in the db
router.get('/', (request, response) => {
    productsmodel.find()
    .then(productsvariable => {response.json(productsvariable)})
    .catch(error => {response.json(error)})
})

//enter new product details in DB
router.post('/create', (request, response)=>{
    const product = new productsmodel({
        name: request.body.name,
        category: request.body.category,
        image: request.body.image,
        price: request.body.price,
        brand: request.body.brand,
        rating: request.body.rating,
        numReviews: request.body.numReviews
    })

    product.save()
    .then(productsvariable => {response.json(productsvariable)})
    .catch(error => {response.json(error)})
})

//delete a product from db
router.delete('/:id', (request, response) => {
    productsmodel.findByIdAndDelete(request.params.id)
    .then( () => {response.json('Product has been deleted')})
    .catch(error => (response.json(error)))
})

module.exports = router

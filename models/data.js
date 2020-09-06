const mongoose = require('mongoose')

const products = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        reqired: true
    },

    image: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    numReviews: {
        type: String,
        required: true
    }


    // {
    //     _id: '1',
    //     name: 'Slim shirt',
    //     category: 'Shirts',
    //     image: '/images/d1.jpg',
    //     price: 60,
    //     brand: 'Nike',
    //     rating: 4.5,
    //     numReviews: 10
    // }, 
    // {
    //     _id: '2',
    //     name: 'Fit shirt',
    //     category: 'Shirts',
    //     image: '/images/d1.jpg',
    //     price: 70,
    //     brand: 'Nike',
    //     rating: 5,
    //     numReviews: 10
    // },
    // {
    //     _id: '3',
    //     name: 'Khaki pants',
    //     category: 'pants',
    //     image: '/images/d1.jpg',
    //     price: 3.5,
    //     brand: 'Nike',
    //     rating: 4.5,
    //     numReviews: 10
    // }
})

module.exports = mongoose.model('productsdb', products)
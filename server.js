const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productsapi = require('./api/productsapi')

dotenv.config()

mongoose.connect(process.env.PRODUCTSDB, { useUnifiedTopology: true }, ()=>console.log('Database is connected'))

app.use(express.json())
app.use(cors())
app.use('/products', productsapi)

app.listen(9000, ()=> 
console.log("Server is running on port 9000"))
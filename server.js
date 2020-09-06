const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productsurls = require('./api/productsapi')

dotenv.config()

mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true }, ()=> console.log('Database is connected!'))

app.use(cors())
app.use(express.json())
app.use('/products', productsurls)

app.listen(6000, ()=> 
    console.log("Server is running on port 6000")
)

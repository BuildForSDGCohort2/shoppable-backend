const express = require('express')
const app = express()

app.get("/api/products", (req, res)=> {
    response.send(data.products)
})

app.listen(6000, () => 
    console.log("Server is running")
)

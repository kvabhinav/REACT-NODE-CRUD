const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const Home = require('./routes/Home')


const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use(Home)

app.listen(8000, () => {
    console.log("server is listening from port 8000")
})
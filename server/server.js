const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI


const app = express()

app.use(cors())
app.use(express.json())


//Create Instance of MongoClient for mongodb
const client = new MongoClient(uri)

//Connect to database
client.connect().then(() => [
    console.log("Connected Successfully..")
]).catch((err) => {
    console.log("Failed to Connect ", err)
})


//Recieving skills lists
app.get('/', async (req, res) => {
    const db = await client.db("collegeProject")
    const data = await db.collection("skills").find().toArray()
    res.json(data)
    console.log(data)
})


//updating skills lists
app.post('/', async(req,res)=>{
    const skill=req.body.data
    console.log(skill)
    const db =await client.db("collegeProject")
    const data = await db.collection('skills').insertOne({skills:skill})
    console.log(data)
    res.json(data)
})

app.listen(8000, () => {
    console.log("server is listening from port 8000")
})
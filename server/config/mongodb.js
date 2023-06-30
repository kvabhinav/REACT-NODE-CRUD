const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI


//Create Instance of MongoClient for mongodb
const client = new MongoClient(uri)

//Connect to database
client.connect().then(() => [
    console.log("Connected Successfully..")
]).catch((err) => {
    console.log("Failed to Connect ", err)
})

module.exports =client


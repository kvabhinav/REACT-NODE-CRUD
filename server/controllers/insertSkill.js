const client = require('../config/mongodb')

module.exports = async (req, res) => {
    const skill = req.body.data
    const db = await client.db("collegeProject")
    const data = await db.collection('skills').insertOne({ skills: skill })
    console.log(data)
    res.json(data)
}
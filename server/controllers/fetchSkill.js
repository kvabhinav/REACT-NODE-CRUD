const client = require('../config/mongodb')

module.exports = async (req, res) => {
    const db = await client.db("collegeProject")
    const data = await db.collection("skills").find().toArray()
    res.json(data)
}

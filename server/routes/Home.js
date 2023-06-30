const { Router } = require('express')
const fetchSkills = require('../controllers/fetchSkill')
const insertSkill = require('../controllers/insertSkill')

const app = Router()

app.get('/', fetchSkills)

app.post('/', insertSkill)

module.exports = app
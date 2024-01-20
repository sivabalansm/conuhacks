const dateRouter = require('express').Router()
const Date = require('../models/date')

dateRouter.get('/', async (request, response) => {
  const dates = await Date
    .find({}).populate('reservations')
  response.json(dates)
})

dateRouter.post('/', async (request, response) => {
  console.log(request.body)
  const content = request.body
  
  if (!content) response.status(401)
    .json({ error: 'no content was provided' })

  const date = new Date({
    ...content
  })
  
  const result = await date.save()
  response.status(201).json(result)
})

module.exports = dateRouter
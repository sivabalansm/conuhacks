const reservationsRouter = require('express').Router()
const Reservation = require('../models/reservation')

reservationsRouter.get('/', async (request, response) => {
  const reservations = await Reservation.find({})
  response.json(reservations)
})

reservationsRouter.post('/', async (request, response) => {
  console.log(request.body)
  const content = request.body
  
  if (!content) response.status(401)
    .json({ error: 'no content was provided' })

  const reservation = new Reservation({
    ...content
  })
  
  const result = await reservation.save()
  response.status(201).json(result)
})

module.exports = reservationsRouter
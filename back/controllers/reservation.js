const reservationsRouter = require('express').Router()
const Reservation = require('../models/reservation')
const Date = require('../models/date')

reservationsRouter.get('/', async (request, response) => {
  const reservations = await Reservation
    .find({}).populate('date')
  response.json(reservations)
})

reservationsRouter.post('/', async (request, response) => {
  console.log(request.body)
  const content = request.body
  
  if (!content) response.status(401)
    .json({ error: 'no content was provided' })
  
  const dates = await Date.find({ date: content.date })

  if (dates.length === 0) {
    throw new Error('Invalid date')
  }

  const date = dates[0]

  const reservation = new Reservation({
    ...content,
    date: date._id
  })

  const newReservation = await reservation.save()

  date.reservations = date.reservations.concat(newReservation._id)
  date.save()
  
  response.status(201).json(newReservation)
})

reservationsRouter.delete('/:id', async (request, response) => {
  const reservationToDelete = await Reservation.findById(request.params.id)
  
  if (!reservationToDelete) response.status(404).end()
  
  const date = await Date.findById(reservationToDelete.date)

  date.reservations = date.reservations.filter(reservation => reservation._id.toString() !== reservationToDelete._id.toString())
  
  await Reservation.findByIdAndDelete(request.params.id)
  date.save()

  response.status(204).end()
})

module.exports = reservationsRouter
const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Date'
  },
  bay: {
    type: Number,
    required: true,
  },
  walkIn: {
    type: Boolean,
    required: true
  },
  reject: {
    type: Boolean,
    required: true
  },
})

reservationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    returnedObject.date = returnedObject.date.date
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Reservation', reservationSchema)
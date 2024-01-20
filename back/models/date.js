const mongoose = require('mongoose')

const dateSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  reservations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation'
  }
})

dateSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject.date
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Date', dateSchema)
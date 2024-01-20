const Date = require('./models/date')

let date = new Date('2022-01-01')

const days = [...Array(365).keys()]

days.forEach((n) => {
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth() + 1
    const day = date.getUTCDate()

    const newDate = new Date({
        date: `${year}-${month}-${day}`,
        reservation: []
    })

    newDate.save().then(() => {
        console.log('success')
    })

    date = new Date(date.getTime() + 24 * 60 * 60 * 1000)
})
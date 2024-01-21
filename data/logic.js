const fs = require('node:fs')

const dates = JSON.parse(
    fs.readFileSync('./dates.json')
)

const getCarTime = (car) => {
    const cars = {
      'compact': 30,
      'medium': 30,
      'full-size': 30,
      'class 1 truck': 60,
      'class 2 truck': 120,
    }
    const [startHour, startMinute] = car[1].split(' ')[1].split(':')
    const startTime = Number(startHour) * 60 + Number(startMinute)
    const endTime = startTime + cars[car[2]]
  
    return [startTime, endTime]
}

const isCompatible = (car_1, car_2) => {
    const time_1 = getCarTime(car_1)
    const time_2 = getCarTime(car_2)

    return time_1[0] > time_2[1] || time_1[1] < time_2[0]
}

const isPossible = (carsToPlace, schedule=null) => {
    if (schedule == null) {
        schedule = new Array(5)
        for (let i = 0; i < 5; i++) {
            schedule[i] = new Array();
          }
    }

    if (!carsToPlace) return true
    console.log(carsToPlace)

    for (let idx = 0; idx < schedule.length; idx++) {
        let new_schedule = JSON.parse(JSON.stringify(schedule))
        let bay = new_schedule[idx]

        let compatible = true

        for (const carPlaced of bay) {
            if (!isCompatible(carPlaced, carsToPlace[0])) {
                compatible = false
                break
            }
        }

        if (compatible) {
            new_schedule = JSON.parse(JSON.stringify(schedule))
            new_schedule[idx] = new_schedule.concat(carsToPlace[0])
        }
        
        if (isPossible((carsToPlace.slice(1)), new_schedule)) {
            return True
        } else if (schedule[idx] == []) {
            break
        }
    }

   return false
}

    
for (const [date, values] of Object.entries(dates)) {
    const newValues = values.toSorted((v1, v2) => {
        const [d1, t1] = v1[0].split(' ')
        const [d2, t2] = v2[0].split(' ')
        const n1 = Number(d1.split('-').join('') + t1.split(':').join(''))
        const n2 = Number(d2.split('-').join('') + t2.split(':').join(''))
        return n1 - n2
    })

    let schedule = []

    newValues.forEach((value) => {
        if (isPossible([value] + schedule)) {
            schedule.append(value)
        }
    })

    dates[date] = schedule
    break
}


  







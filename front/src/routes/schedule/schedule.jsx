import _ from 'lodash'

import Row from './row'
import Car from './car'
import './schedule.css'

const Schedule = () => {
  const times  = _.range(7, 19)

  const cars = [
  ]

  return (
    <>
      <h2 className='subheader'>Possible Schedules</h2>
      <div className='schedule'>
        <table className='schedule_base'>
          <thead>
            <tr className='schedule_header'>
              <th></th>
              {_.range(1, 11).map(num => <th key={num}>Bay {num}</th>)}
            </tr>
          </thead>
          <tbody>
            {times.map(time => <Row key={time} time={time} />)}
          </tbody>
        </table>
        {cars.map(car => <Car key={car.ID} car={car} />)}
      </div>
    </>
  )
}

export default Schedule
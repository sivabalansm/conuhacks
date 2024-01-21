import _ from 'lodash'
import { useMatch, useNavigate } from 'react-router-dom'

import Row from './Row'
import Car from './Car'
import Chat from '../../components/chat/Chat'

import './schedule.css'
import '../../global.css'

const Schedule = () => {
  const navigate = useNavigate()
  const match = useMatch('schedule/:date')

  const date = match
    ? new Date(match.params.date)
    : new Date('2022-10-01')

  

  const changeDay = (change) => {
    const newDate = new Date(date.getTime() + change * 24 * 60 * 60 * 1000)

    const newYear = newDate.getUTCFullYear()
    const newMonth = newDate.getUTCMonth() + 1
    const newDay = newDate.getUTCDate()

    navigate(`/schedule/${newYear}-${newMonth}-${newDay}`)
  }

  const cars = []

  return (
    <>
      <h2 className='subheader'>Schedule of {_.slice(date.toUTCString(), 0, 16)}</h2>
      <div className='schedule'>
        <table className='schedule_base'>
          <thead>
            <tr className='schedule_header'>
              <th></th>
              {_.range(1, 11).map(num => <th key={num}>Bay {num}</th>)}
            </tr>
          </thead>
          <tbody>
            {_.range(7, 19).map(time => <Row key={time} time={time} />)}
          </tbody>
        </table>
        {cars.map(car => <Car key={car.ID} car={car} />)}
      </div>
      <div id='buttons'>
        <button onClick={() => changeDay(-1)}>Previous Day</button>
        <button onClick={() => changeDay(+1)}>Next Day</button>
      </div>
      <Chat />
    </>
  )
}

export default Schedule

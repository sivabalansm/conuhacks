import _ from 'lodash'
import { useMatch, useNavigate, Link } from 'react-router-dom'

import Row from './Row'
import Car from './Car'
import Chat from '../../components/chat/Chat'
import reservationServices from '../../services/reservation'

import './schedule.css'
import '../../global.css'
import { useEffect, useState } from 'react'

const Schedule = () => {
  const navigate = useNavigate()
  const match = useMatch('schedule/:date')

  const [cars, setCars] = useState([])
  const [date, setDate] = useState(new Date('2022-10-01'))

  useEffect(() => {
    if (match) {
      setDate(new Date(match.params.date))
    }
  }, [])


  useEffect(() => {
    const init = async () => {
      const newYear = date.getUTCFullYear()
      const newMonth = String(date.getUTCMonth() + 1).padStart(2, '0')
      const newDay = String(date.getUTCDate()).padStart(2, '0')

      const response = await reservationServices.getFromDate(`${newYear}-${newMonth}-${newDay}`)
      const initialCars = response[0].reservations

      setCars(initialCars)
    }
    init()
  }, [date])


  const changeDay = (change) => {
    const newDate = new Date(date.getTime() + change * 24 * 60 * 60 * 1000)

    const newYear = newDate.getUTCFullYear()
    const newMonth = String(newDate.getUTCMonth() + 1).padStart(2, '0')
    const newDay = String(newDate.getUTCDate()).padStart(2, '0')

    setDate(new Date(`${newYear}-${newMonth}-${newDay}`))
    navigate(`/schedule/${newYear}-${newMonth}-${newDay}`)
  }

  const changeToToday = () => {
    const newDate = new Date()

    // const newYear = newDate.getUTCFullYear()
    // const newMonth = String(newDate.getUTCMonth() + 1).padStart(2, '0')
    // const newDay = newDate.getUTCDate()

    const [newYear, newMonth, newDay] = [2022, 10, 1]

    navigate(`/schedule/${newYear}-${newMonth}-${newDay}`)
  }

  return (
    <>
      <div className = 'sidebar'>
        <Link className='sidebar-title' to='/'>
          <img id="logo" src="../../assets/gear.svg" alt="logo"/>
          <p>SAPMechanic</p>
        </Link>
        <div className='indented-divider2'></div>
        <div className='sidebar-group'>
            <Link className='sidebar-item' to='/'>Dashboard</Link>
            <Link className='sidebar-item' to='/schedule'>Schedule</Link>
            <Link className='sidebar-item' to='/analytics'>Analytics</Link>
        </div>
    </div>
    <div id='schedule-main'>
      <h2 className='subheader'>Schedule of {_.slice(date.toUTCString(), 0, 16)}</h2>
      <div id='buttons'>
        <button onClick={() => changeDay(-1)}>&lt;</button>
        <button onClick={() => changeToToday()}>Today</button>
        <button onClick={() => changeDay(+1)}>&gt;</button>
      </div>
      <div id='color-legend'>
        <div id='compact'className='legend-color-container'>Compact Car</div>
        <div id='medium'className='legend-color-container'>Medium Car</div>
        <div id='full-size'className='legend-color-container'>Full-size Car</div>
        <div id='class1truck'className='legend-color-container'>Class 1 Truck</div>
        <div id='class2truck'className='legend-color-container'>Class 2 Truck</div>
      </div>
      <div className='schedule'>
        <table className='schedule_base'>
          <thead>
            <tr className='schedule_header'>
              <th className='bays'></th>
              {_.range(1, 11).map(num => <th className='bays' key={num}>Bay {num}</th>)}
            </tr>
          </thead>
          <div id='cars'>
            {cars.map(car => <Car key={car.id} car={car} />)}
          </div>
          <tbody>
            {_.range(7, 20).map(time => <Row key={time} time={time} />)}
          </tbody>
        </table>
      </div>
    </div>
      <Chat />
    </>
  )
}

export default Schedule

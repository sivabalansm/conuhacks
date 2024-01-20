import Row from './row'
import Car from './car'
import './schedule.css'

const Schedule = () => {
  let times = []

  for (let i=8; i < 18; i += 0.5) {
    times.push(i + 0.25)
  }

  const cars = [
  ]


  return (
    <>
      <h2>Possible Schedules</h2>
      <div className='schedule'>
        <table className='schedule_base'>
          <thead>
            <tr className='schedule_header'>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
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
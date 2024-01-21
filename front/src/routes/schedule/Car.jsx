const Car = ({ car }) => {
  const [h, min] = car.time.split(':')
  const startTime = (h - 7) * 60 + Number(min)

  const durations = {
    'compact': 30,
    'medium': 30,
    'full-size': 30,
    'class 1 truck': 60,
    'class 2 truck': 120,
  }

  const carStyle = {
    left: 80 + 100 * (car.bay - 1),
    top: 60 * (startTime / 60),
    height: durations[car.type] / 60 * 60
  }

  return (
    <div id={car.type.replace(/\s/g, '')} className='car' style={carStyle}>
      <p>{car.type}</p>
      <p>{car.time}</p>
    </div>
  )
}

export default Car

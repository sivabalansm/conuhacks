import _ from 'lodash'

const Row = ({ time }) => {
  const startTime = time + ':00'
  const endTime = time + ':30'

  return (
    <tr className='schedule_row'>
      <td>
        {startTime}
        <br />
        {endTime}
      </td>
      {_.range(10).map(n => <td></td>)}
    </tr>
  )
}

export default Row
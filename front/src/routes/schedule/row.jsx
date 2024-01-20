const Row = ({ time }) => {
  const startTime = Math.floor(time) + ':' + ((time - Math.floor(time)) * 60)
  let endTime = time + 0.5
  endTime = Math.floor(endTime) + ':' + ((endTime - Math.floor(endTime)) * 60 - 10).toString().padStart(2, '0')


  return (
    <tr className='schedule_row'>
      <td>
        {startTime}
        <br />
        {endTime}
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default Row
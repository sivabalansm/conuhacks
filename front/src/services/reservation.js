import axios from 'axios'
const baseUrl = '/api/reservation'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getFromDate = async (date) => {
    const dateUrl = `api/date/${date}`
    const response = await axios.get(dateUrl)
    return response.data
}

const create = async (newReservation) => {
    const response = await axios.post(baseUrl, newReservation)
    return response.data
}

const remove = async (ReservationId) => {
    const reservationUrl = `${baseUrl}/${ReservationId}`

    const response = await axios.delete(reservationUrl)
    return response
}

export default { getAll, getFromDate, create, remove }
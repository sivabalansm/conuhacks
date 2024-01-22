import { Link } from 'react-router-dom'
import '../../global.css'
import './dashboard.css'
import { useState, useEffect } from 'react'
import reservationServices from '../../services/reservation'

const Dashboard = () => {
    const [served, setServed] = useState(0)
    const [earned, setEarned] = useState(0)
    const [width, setWidth] = useState(0)
    const date = new Date('2022-10-01')
    const actualDate = new Date()
    const progressBar = document.getElementById('progress-bar-inside')

    date.setUTCHours(actualDate.getUTCHours() - 1)
    date.setUTCMinutes(actualDate.getUTCMinutes())

    const profit = {
        'compact': 150,
        'medium': 150,
        'full-size': 150,
        'class 1 truck': 250,
        'class 2 truck': 700
    }

    const [reservations, setReservations] = useState([])
    const [totalRevenue, setTotalRevenue] = useState(0)
    const [rejects, setRejects] = useState([])
    const [fake_r, setFake_r] = useState([])


    useEffect(() => {
        const init = async () => {
            const newYear = date.getUTCFullYear()
            const newMonth = String(date.getUTCMonth() + 1).padStart(2, '0')
            const newDay = String(date.getUTCDate()).padStart(2, '0')

            let rs = await reservationServices.getFromDate(`${newYear}-${newMonth}-${newDay}`)
            rs = rs[0].reservations
            const initialReservations = rs.filter(r => !r.reject)
            const temp_rejects = rs.filter(r => r.reject) 
            setReservations(initialReservations)
            setRejects(temp_rejects)
        }
        init()
    }, [])

        useEffect(() => {
            const init = () => {
                let newTotalRevenue = 0
                reservations.forEach(reservation => {
                    newTotalRevenue += profit[reservation.type]
                })

                setTotalRevenue(newTotalRevenue)
                let sort_r = reservations.toSorted((r1, r2) => {
                    const [h1, m1] = r1.time.split(':')
                    const [h2, m2] = r2.time.split(':')
                    const t1 = Number(h1) * 60 + Number(m1)
                    const t2 = Number(h2) * 60 + Number(m2)
                    return t1 - t2
                })                

                setFake_r(sort_r)
            }
            if (!reservations) {
                return null
            } else {
                init()
            }
            
        }, [reservations])

    const handleDone = (e) => {
        const [id, profit] = e.target.id.split('-')
        let tempServed = served + 1
        let tempEarned = earned + Number(profit)
        let ratio = (tempEarned / totalRevenue) * 100
        let tempWidth = ratio // value may change depending on money

        // Locks progress bar at 100
        if (ratio >= 100) {
            tempWidth = 100
            progressBar.style.backgroundColor = '#3bba4a'
        }

        setServed(tempServed)
        setEarned(tempEarned)
        setWidth(tempWidth)
        setFake_r(fake_r.filter(r => r.id !== id))

        progressBar.style.width = tempWidth + '%'
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
            <div className='main-container'>
                <div className='main-container-title'>
                    <div className='flex'>
                        <div className='main-container-title-child'>
                            <h1 id='today-title'><span>{date.toUTCString().slice(0, 16)}</span></h1>     
                        </div>
                    </div>
                </div>
                <div className='dashboard-row'>
                    <div id='daily-upcoming-schedules'>
                        {/* Plug-in upcoming schedules as a list of items */}
                        <div>
                            <h2>Daily Upcoming Schedules</h2>
                        </div>
                        <div id='schedule-item-container'>
                            {/* {cars.slice(0, 5).map((car) => {
                                <div className='schedule-item'>
                                    <p>placeholder</p>
                                    <button className='done-button' onClick={handleDone}>done</button>
                                </div>
                            })} */}
                            {fake_r.slice(0, 5).map((car) => {
                                return (
                                    <div className='schedule-item'>
                                        <p>{car.type} {profit[car.type]}$ {car.time.split(':').map(t => t.padStart(2, '0')).join(':')}</p>
                                        <button className='done-button' onClick={handleDone} id={[car.id, profit[car.type]].join('-')}>done</button>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div id='daily-customers-done-ratio'>
                        <h2 className='flex flex-horizontal-center'>Customers Served</h2>
                        {/* Here, plug in # of served people and # of people to serve during that day */}
                        <p id='served'>{served} / {reservations.length}</p>
                    </div>
                </div>
                <div className='dashboard-row2'>
                    <div id='daily-possible-profit'>
                        <h2>Daily Possible Profit</h2>
                        {/* Plug-in possible daily profit */}
                        <div id='possible-profit-container'>
                            {earned} / {totalRevenue}$
                        </div>
                        <div id='progress-bar'>
                            {/* Enter percentage progress bar earned */}
                            <div id='progress-bar-inside'>
                            </div>
                        </div>
                    </div>
                    <div id='daily-customers-rejected'>
                        <h2 className='flex flex-horizontal-center'>Daily Customers Rejected</h2>
                        {/* Plug-in daily customers rejected */}
                        <p id='rejected'>{rejects.length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

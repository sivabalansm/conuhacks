import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import reservationServices from '../../services/reservation'

import '../../global.css'
import './analytics.css'

const profit = {
    'compact': 150,
    'medium': 150,
    'full-size': 150,
    'class 1 truck': 250,
    'class 2 truck': 700
}


const Analytics = () => {
    const [reservations, setReservations] = useState([])
    const [totalRevenue, setTotalRevenue] = useState(0)
    const [totalCustomers, setTotalCustomers] = useState(0)
    const [totalCompact, setTotalCompact] = useState(0)
    const [totalMedium, setTotalMedium] = useState(0)
    const [totalFullSize, setTotalFullSize] = useState(0)
    const [totalTruck1, setTotalTruck1] = useState(0)
    const [totalTruck2, setTotalTruck2] = useState(0)
    const [r_totalCompact, r_setTotalCompact] = useState(0)
    const [r_totalMedium, r_setTotalMedium] = useState(0)
    const [r_totalFullSize, r_setTotalFullSize] = useState(0)
    const [r_totalTruck1, r_setTotalTruck1] = useState(0)
    const [r_totalTruck2, r_setTotalTruck2] = useState(0)
    const [rejects, setRejects] = useState([])
    const [lostRevenue, setLostRevenue] = useState(0)


    useEffect(() => {
        const init = async () => {
            const rs = await reservationServices.getAll()
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
            let newTotalCustomers = 0
            let newLoss = 0
            let count = {
                'compact': 0,
                'medium': 0,
                'full-size': 0,
                'class 1 truck': 0,
                'class 2 truck': 0
            }
            let r_count = {
                'compact': 0,
                'medium': 0,
                'full-size': 0,
                'class 1 truck': 0,
                'class 2 truck': 0
            }
            reservations.forEach(reservation => {
                newTotalRevenue += profit[reservation.type]
                newTotalCustomers += 1
                count[reservation.type] += 1
                setTotalCustomers(newTotalCustomers)
            })
            rejects.forEach(reservation => {
                newLoss += profit[reservation.type]
                r_count[reservation.type] += 1
            })

            setTotalRevenue(newTotalRevenue)
            setTotalCustomers(newTotalCustomers)
            setTotalCompact(count['compact'])
            setTotalMedium(count['medium'])
            setTotalFullSize(count['full-size'])
            setTotalTruck1(count['class 1 truck'])
            setTotalTruck2(count['class 2 truck'])
            r_setTotalCompact(r_count['compact'])
            r_setTotalMedium(r_count['medium'])
            r_setTotalFullSize(r_count['full-size'])
            r_setTotalTruck1(r_count['class 1 truck'])
            r_setTotalTruck2(r_count['class 2 truck'])
            setLostRevenue(newLoss)
        }
        if (!reservations) {
            return null
        } else {
            init()
        }
        
    }, [reservations])

    return (
        <>
            <div className = 'sidebar'>
                <div className = 'sidebar-title'>
                    <img id="logo" src="../../assets/gear.svg" alt=""/>
                    <p>SAPMechanic</p>
                </div>
                <div className='sidebar-group'>
                    <Link className='sidebar-item' to='/'>Dashboard</Link>
                    <Link className='sidebar-item' to='/schedule'>Schedule</Link>
                    <Link className='sidebar-item' to='/analytics'>Analytics</Link>
                </div>
            </div>
            {/* MAIN PAGE CONTAINER */}
            <div className='analytics-main-container'>
                <div className='main-container-title'>
                    <div className='main-container-title-child'>
                        <h1>Analytics</h1>     
                    </div>
                </div>
                <p>An overview of the statistics taken from the current batch of reservations. </p>
                <div id='total-revenue-container' className='main-container-margin'>
                    <h2>Total Revenue</h2>
                    <p id='total-revenue'>{totalRevenue}$</p>
                </div>

                {/* Quick overview of # of accepted customers and rejected customers */}
                <div className='flex'>
                    <div id='customers-taken-container' className='width50 analytics-customers'>
                        <h2>Customers Taken</h2>
                        <p id='customers-taken'>{totalCustomers}</p>
                    </div>
                    <div className='width50 analytics-customers'>
                        <div id='customers-rejected'>
                            <h2>Customers Rejected</h2>
                            <p className='analytics-loss'>{rejects.length}</p>
                        </div>
                        <div id='customers-rejected2'>
                            <h2>Potential Revenue Lost</h2>
                            <p className='analytics-loss'>{lostRevenue}$</p>
                        </div>
                    </div>
                </div>

                {/* Number of walkins vs number of reservations */}
                <div className='flex fix1'>
                    <div className='width50' id='walkins'>
                        <h2 className='flex flex-horizontal-center'>Walk-ins</h2>
                        <div className='analytics-walk-res-container'>
                            <p className='analytics-walkres-number'>{reservations.filter(r => r.walkIn).length}</p>
                            <img className='analytics-walk-res-icons' src='../../assets/walking.svg' alt='walking-man'/>
                        </div>
                    </div>
                    <div className='width50' id='reservations'>
                        <h2 className='flex flex-horizontal-center'>Reservations</h2>
                        <div className='analytics-walk-res-container'>
                            <p className='analytics-walkres-number'>{reservations.filter(r => !r.walkIn).length}</p>
                            <img className='analytics-walk-res-icons' src='../../assets/calendar.svg' alt='walking-man'/>
                        </div>
                    </div>
                </div>

                {/* Indented Divider */}
                <div className='indented-divider'>/////////////////////////////////////////////////////////////////////////////</div>                

                <div id='vehicle-types-container'>
                    <h2>Customers Served/Rejected and Revenue per Vehicle Type</h2>
                </div>

                {/* VEHICLE TYPES CONTAINER */}
                <div>
                {/* Compact Cars */}
                    {/* Name and icon of car */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/small-car.svg' alt=''/>
                        </div>
                        <div className='analytics-car-item2'>
                            <p className='analytics-car-name'>Compact car</p>
                        </div>

                        {/* Amount of customers accepted */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalCompact}</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of customers refused */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{r_totalCompact}</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalCompact * 150}$</p>
                            <div className='analytics-money-container'>
                                <img className='analytics-checkmark' src='../../assets/money2.svg' alt=''/>
                            </div>
                        </div>
                    </div>

                {/* Medium Cars */}
                    {/* Name and icon of car */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/medium-car.svg' alt=''/>
                        </div>
                        <div className='analytics-car-item2'>
                            <p className='analytics-car-name'>Medium car</p>
                        </div>

                        {/* Amount of customers accepted */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalMedium}</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of customers refused */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{r_totalMedium}</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalMedium * 150}$</p>
                            <div className='analytics-money-container'>
                                <img className='analytics-checkmark' src='../../assets/money2.svg' alt=''/>
                            </div>
                        </div>
                    </div>

                {/* Full-size Cars */}
                    {/* Name and icon of car */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/large-car.svg' alt=''/>
                        </div>
                        <div className='analytics-car-item2'>
                            <p className='analytics-car-name'>Full-size car</p>
                        </div>

                        {/* Amount of customers accepted */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalFullSize}</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of customers refused */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{r_totalFullSize}</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalFullSize * 150}$</p>
                            <div className='analytics-money-container'>
                                <img className='analytics-checkmark' src='../../assets/money2.svg' alt=''/>
                            </div>
                        </div>
                    </div>

                {/* Class 1 Truck */}
                    {/* Name and icon of car */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/small-truck.svg' alt=''/>
                        </div>
                        <div className='analytics-car-item2'>
                            <p className='analytics-car-name'>Class 1 Truck</p>
                        </div>

                        {/* Amount of customers accepted */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalTruck1}</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of customers refused */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{r_totalTruck1}</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalTruck1 * 250}$</p>
                            <div className='analytics-money-container'>
                                <img className='analytics-checkmark' src='../../assets/money2.svg' alt=''/>
                            </div>
                        </div>
                    </div>

                {/* Class 2 Truck */}
                    {/* Name and icon of car */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/large-truck.svg' alt=''/>
                        </div>
                        <div className='analytics-car-item2'>
                            <p className='analytics-car-name'>Class 2 Truck</p>
                        </div>

                        {/* Amount of customers accepted */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalTruck2}</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of customers refused */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{r_totalTruck2}</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt='cross'/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>{totalTruck2 * 700}$</p>
                            <div className='analytics-money-container'>
                                <img className='analytics-checkmark' src='../../assets/money2.svg' alt='money'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics

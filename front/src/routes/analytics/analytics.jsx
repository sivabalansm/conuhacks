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


    useEffect(() => {
        const init = async () => {
            const initialReservations = await reservationServices.getAll()
            setReservations(initialReservations)
        }
        init()
    }, [])

    useEffect(() => {
        const init = () => {
            let newTotalRevenue = 0
            let newTotalCustomers = 0
            let count = {
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
            setTotalRevenue(newTotalRevenue)
            setTotalCustomers(newTotalCustomers)
            setTotalCompact(count['compact'])
            setTotalMedium(count['medium'])
            setTotalFullSize(count['full-size'])
            setTotalTruck1(count['class 1 truck'])
            setTotalTruck2(count['class 2 truck'])

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
                            <p className='analytics-loss'>16</p>
                        </div>
                        <div id='customers-rejected2'>
                            <h2>Potential Revenue Lost</h2>
                            <p className='analytics-loss'>9000$</p>
                        </div>
                    </div>
                </div>

                {/* Number of walkins vs number of reservations */}
                <div className='flex fix1'>
                    <div className='width50' id='walkins'>
                        <h2 className='flex flex-horizontal-center'>Walk-ins</h2>
                        <div className='analytics-walk-res-container'>
                            <p className='analytics-walkres-number'>56</p>
                            <img className='analytics-walk-res-icons' src='../../assets/walking.svg' alt='walking-man'/>
                        </div>
                    </div>
                    <div className='width50' id='reservations'>
                        <h2 className='flex flex-horizontal-center'>Reservations</h2>
                        <div className='analytics-walk-res-container'>
                            <p className='analytics-walkres-number'>10</p>
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
                            <p className='analytics-checkmark-text'>12</p>
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
                            <p className='analytics-checkmark-text'>12</p>
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
                            <p className='analytics-checkmark-text'>10</p>
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
                            <p className='analytics-checkmark-text'>2</p>
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
                            <p className='analytics-checkmark-text'>4</p>
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

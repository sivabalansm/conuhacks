import { Link } from 'react-router-dom'
import '../../global.css'
import './dashboard.css'
import { useState, useEffect } from 'react'

const Dashboard = () => {
    const [served, setServed] = useState(0)
    const [toserve, setToServer] = useState(47) // fake data
    const [earned, setEarned] = useState(0)
    const [tempdata, setTempData] = useState({})

    const handleDone = () => {
        console.log('Done button pressed')
        let tempserved = served + 1
        setServed(tempserved)
    }

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
            <div className='main-container'>
                <div className='main-container-title'>
                    <div className='flex'>
                        <div className='main-container-title-child'>
                            <h1 id='today-title'><span>Put actual date here</span></h1>     
                        </div>
                    </div>
                </div>
                <div className='dashboard-row'>
                    <div id='daily-upcoming-schedules'>
                        {/* Plug-in upcoming schedules as a list of items */}
                        <h2>Daily Upcoming Schedules</h2>
                        <div className='schedule-item'>
                            <p>placeholder <button onClick={handleDone}>done</button></p>
                        </div>
                    </div>
                    <div id='daily-customers-done-ratio'>
                        <h2>Customers Served</h2>
                        <p>{served} / {toserve}</p>
                    </div>
                </div>
                <div className='dashboard-row'>
                    <div id='daily-possible-profit'>
                        {/* Plug-in possible daily profit */}
                        <h2>Daily Possible Profit</h2>
                        <div>
                            {}0 / 2356$
                        </div>
                        <div id='progress-bar'>
                            <div id='progress-bar-inside'>
                                {}Enter percentage here
                            </div>
                        </div>
                    </div>
                    <div id='daily-customers-rejected'>
                        {/* Plug-in daily customers rejected */}
                        <h2>Daily Customers Rejected</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

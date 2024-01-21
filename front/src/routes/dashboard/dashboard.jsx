import { Link } from 'react-router-dom'
import '../../global.css'
import './dashboard.css'
import { useState, useEffect } from 'react'

const [served, setServed] = useState(0)
const [earned, setEarned] = useState(0)
const [tempdata, setTempData] = useState({})
setTempData({})

const Dashboard = () => {
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
                            <h1><span>Put actual date here</span></h1>     
                        </div>
                    </div>
                </div>
                <div className='dashboard-row'>
                    <div id='daily-upcoming-schedules'>
                        {/* Plug-in upcoming schedules as a list of items */}
                        Daily Upcoming Schedules
                    </div>
                    <div id='daily-customers-done-ratio'>
                        <h2>Customers Served</h2>
                        <p>{}0 / 47</p>
                    </div>
                </div>
                <div className='dashboard-row'>
                    <div id='daily-possible-profit'>
                        {/* Plug-in possible daily profit */}
                        Daily Possible Profit
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
                        Daily Customers Rejected
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

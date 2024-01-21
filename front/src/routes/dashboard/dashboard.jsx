import { Link } from 'react-router-dom'
import '../../global.css'
import './dashboard.css'
import { useState, useEffect } from 'react'

const Dashboard = () => {
    const [served, setServed] = useState(0)
    const [toserve, setToServer] = useState(47) // fake data
    const [earned, setEarned] = useState(0)
    const [tempdata, setTempData] = useState({})
    const [width, setWidth] = useState(0)

    const progressBar = document.getElementById('progress-bar-inside')

    const handleDone = () => {
        console.log('Done button pressed')
        let tempserved = served + 1
        let tempearned = earned + 1
        let tempwidth = width + 1 // 1 value may change depending on money
        setServed(tempserved)
        setEarned(tempearned)
        setWidth(tempwidth)
        progressBar.style.width = width + '%'
    }

    setTempData({})

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
                            <h1 id='today-title'><span>Today's date</span></h1>     
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
                            {/* List all items here, preferably in the following layout. All info goes in one <p></p> */}
                            <div className='schedule-item'>
                                <p>placeholder</p>
                                <button className='done-button' onClick={handleDone}>done</button>
                            </div>
                            <div className='schedule-item'>
                                <p>placeholder</p>
                                <button className='done-button' onClick={handleDone}>done</button>
                            </div>
                            <div className='schedule-item'>
                                <p>placeholder</p>
                                <button className='done-button' onClick={handleDone}>done</button>
                            </div>
                            <div className='schedule-item'>
                                <p>placeholder</p>
                                <button className='done-button' onClick={handleDone}>done</button>
                            </div>
                        </div>
                    </div>
                    <div id='daily-customers-done-ratio'>
                        <h2 className='flex flex-horizontal-center'>Customers Served</h2>
                        {/* Here, plug in # of served people and # of people to serve during that day */}
                        <p id='served'>{served} / {toserve}</p>
                    </div>
                </div>
                <div className='dashboard-row2'>
                    <div id='daily-possible-profit'>
                        <h2>Daily Possible Profit</h2>
                        {/* Plug-in possible daily profit */}
                        <div id='possible-profit-container'>
                            {earned} / {}2356$
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
                        <p id='rejected'>9</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

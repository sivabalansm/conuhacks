import { Link } from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className = 'sidebar'>
                <div className = 'sidebar-title'>
                    <img id="logo" src="../../assets/gear.svg" alt=""/>
                    <p>Repair Shop</p>
                </div>
                <div className='sidebar-group'>
                    <Link className='sidebar-item' to='/'>Dashboard</Link>
                    <Link className='sidebar-item' to='/schedule'>Schedule</Link>
                    <Link className='sidebar-item' to='/analytics'>Analytics</Link>
                </div>

            </div>
            <div className='main-container'>
                <div className='main-container-title'>
                    <div className='main-container-title-child'>
                        <h1>Today</h1>     
                    </div>
                    <div className='main-container-title-child'>
                        <p>the actual date</p>
                    </div>
                    <div className='main-container-title-child'>
                        <p>Dark Mode</p>
                    </div>
                </div>
                <div className='dashboard-row'>
                    <div id='daily-upcoming-schedules'>
                        Daily Upcoming Schedules
                    </div>
                    <div id='daily-customers-done-ratio'>
                        0/47 Customers Circle Graph
                    </div>
                </div>
                <div className='dashboard-row'>
                    <div id='daily-possible-profit'>
                        Daily Possible Profit
                    </div>
                    <div id='daily-customers-rejected'>
                        Daily Customers Rejected
                    </div>
                </div>


            </div>
        </>
    )
}

export default Dashboard

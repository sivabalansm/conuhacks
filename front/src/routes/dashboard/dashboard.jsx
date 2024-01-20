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
                    <Link className='sidebar-item' to='/dashboard'>Dashboard</Link>
                    <Link className='sidebar-item' to='/schedule'>Schedule</Link>
                    <Link className='sidebar-item' to='/analytics'>Analytics</Link>
                </div>

            </div>
            <div className='main-container'>
                <h1>Dashboard</h1>
            </div>
        </>
    )
}

export default Dashboard

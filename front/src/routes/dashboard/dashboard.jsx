import { Link } from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div>Hi</div>
            
            <div className = "sidebar">
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/schedule'>Schedule</Link>
                <Link to='/analytics'>Analytics</Link>
            </div>
        </>
    )
}

export default Dashboard

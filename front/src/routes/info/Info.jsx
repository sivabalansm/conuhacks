import { Link } from 'react-router-dom'
import './info.css'

const Info = () => {
    return (
        <>
            <div>Hi</div>
            
            <div className = "sidebar">
                <Link to='/info'>Dashboard</Link>
                <Link to='/schedule'>Schedule</Link>
                <Link to='/analytics'>Analytics</Link>
            </div>
        </>
    )
}

export default Info

import { Link } from 'react-router-dom'
import '../../global.css'
import './analytics.css'

const Analytics = () => {
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
            {/* MAIN PAGE CONTAINER */}
            <div className='main-container'>
                <div className='main-container-title'>
                    <div className='main-container-title-child'>
                        <h1>Analytics</h1>     
                    </div>
                    <div className='main-container-title-child'>
                        <p>Dark Mode</p>
                    </div>
                </div>
                <div className='main-container-margin' id="total-revenue">
                    Total Revenue
                </div>

                {/* Quick overview of # of accepted customers and rejected customers */}
                <div className='main-container-margin flex'>
                    <div className='width50'>
                        # accepted
                    </div>
                    <div className='width50'>
                        <div>
                            # rejected
                        </div>
                        <div>
                            $ revenue lost
                        </div>
                    </div>
                </div>

                {/* VEHICLE TYPES CONTAINER */}
                <div className='main-container-margin'>

                    {/* Compact Cars */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/small-car.svg' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p>Compact car</p>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p><span>1000$</span>Total</p>
                        </div>
                    </div>

                    {/* Medium Cars */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/medium-car.svg' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p>Medium car</p>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p><span>1000$</span>Total</p>
                        </div>
                    </div>

                    {/* Full-size Cars */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/large-car.svg' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p>Full-size car</p>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p><span>1000$</span>Total</p>
                        </div>
                    </div>

                    {/* Class 1 Trucks */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/small-truck.svg' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p>Class 1 Truck</p>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p><span>1000$</span>Total</p>
                        </div>
                    </div>

                    {/* Class 2 Trucks */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/large-truck.svg' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p>Class 2 Truck</p>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5 flex flex-horizontal-center'>
                            <p><span>1000$</span>Total</p>
                        </div>
                    </div>

                </div>

                {/* Most and Least profitable vehicle types */}
                <div className='main-container-margin flex'>
                    <div className='width50' id='most-profitable-vehicle'>
                        most profitable vehicle
                    </div>
                    <div className='width50' id='least-profitable-vehicle'>
                        least profitable vehicle
                    </div>
                </div>

                {/* Number of walkins vs number of reservations */}
                <div className='main-container-margin flex'>
                    <div className='width50' id='walkins'>
                        walkins
                    </div>
                    <div className='width50' id='reservations'>
                        reservations
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics

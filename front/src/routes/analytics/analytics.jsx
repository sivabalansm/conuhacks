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
            <div className='analytics-main-container'>
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
                    {/* Name and icon of car */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/small-car.svg' alt=''/>
                        </div>
                        <div className='analytics-car-item'>
                            <p className='analytics-car-name'>Compact car</p>
                        </div>

                        {/* Amount of overall revenue */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>20000000</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of revenue loss */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>12</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>1000$</p>
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
                        <div className='analytics-car-item'>
                            <p className='analytics-car-name'>Medium car</p>
                        </div>

                        {/* Amount of overall revenue */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>1999</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of revenue loss */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>56</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>2000$</p>
                            <div className='analytics-money-container'>
                                <img className='analytics-checkmark' src='../../assets/money2.svg' alt=''/>
                            </div>
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

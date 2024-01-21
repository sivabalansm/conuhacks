import { Link } from 'react-router-dom'
import '../../global.css'
import './analytics.css'

const Analytics = () => {
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
                    <div className='main-container-title-child'>
                        <p>Dark Mode</p>
                    </div>
                </div>
                <div id='total-revenue-container' className='main-container-margin'>
                    <h2>Total Revenue</h2>
                    <p id='total-revenue'>2 468 490$</p>
                </div>

                {/* Quick overview of # of accepted customers and rejected customers */}
                <div className='flex'>
                    <div id='customers-taken-container' className='width50 analytics-customers'>
                        <h2 id='customers-taken-text'>Customers Taken</h2>
                        <p id='customers-taken'>72</p>
                    </div>
                    <div id='customers-rejected-container' className='width50 analytics-customers'>
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

                {/* Indented Divider */}
                <div className='idented-divider'></div>


                <div id='vehicle-types-container'>
                    <h2>Vehicle Types</h2>
                </div>

                {/* VEHICLE TYPES CONTAINER */}
                <div className='main-container-margin'>
                {/* Compact Cars */}
                    {/* Name and icon of car */}
                    <div className='flex analytics-car'>
                        <div className='width10 flex flex-horizontal-center'>
                            <img className='analytics-icon' src='../../assets/small-car.svg' alt=''/>
                        </div>
                        <div className='analytics-car-item2'>
                            <p className='analytics-car-name'>Compact car</p>
                        </div>

                        {/* Amount of overall revenue */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>200</p>
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
                        <div className='analytics-car-item2'>
                            <p className='analytics-car-name'>Medium car</p>
                        </div>

                        {/* Amount of overall revenue */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>79</p>
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
                            <p className='analytics-checkmark-text'>9999$</p>
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

                        {/* Amount of overall revenue */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>2</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of revenue loss */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>10</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>9000$</p>
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

                        {/* Amount of overall revenue */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>9</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of revenue loss */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>2</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>19823$</p>
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

                        {/* Amount of overall revenue */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>10</p>
                            <div className='analytics-checkmark-container'>
                                <img className='analytics-checkmark' src='../../assets/checkmark.svg' alt=''/>
                            </div>
                        </div>

                        {/* Amount of revenue loss */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>4</p>
                            <div className='analytics-cross-container'>
                                <img className='analytics-checkmark' src='../../assets/cross.svg' alt='cross'/>
                            </div>
                        </div>

                        {/* Amout of Money earned from vehicle type */}
                        <div className='analytics-car-item'>
                            <p className='analytics-checkmark-text'>22098$</p>
                            <div className='analytics-money-container'>
                                <img className='analytics-checkmark' src='../../assets/money2.svg' alt='money'/>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Number of walkins vs number of reservations */}
                <div className='main-container-margin flex'>
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
            </div>
        </>
    )
}

export default Analytics

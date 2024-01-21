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
                    <div className='flex analytics-car'>
                        <img className='width10' src='' alt=''/>
                        <p className='width22-5'>compact car</p>
                        <div className='width22-5'>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5'>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div className='width22-5'>
                            <p><span>1000$</span>Total</p>
                        </div>
                    </div>
                    <div className='flex analytics-car'>
                        <img src='' alt=''/>
                        <p>medium car</p>
                        <div>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p><span>69$</span>Total</p>
                        </div>
                    </div>
                    <div className='flex analytics-car'>
                        <img src='' alt=''/>
                        <p>full-size car</p>
                        <div>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p><span>2$</span>Total</p>
                        </div>
                    </div>
                    <div className='flex analytics-car'>
                        <img src='' alt=''/>
                        <p>class 1 truck</p>
                        <div>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p><span>999$</span>Total</p>
                        </div>
                    </div>
                    <div className='flex analytics-car'>
                        <img src='' alt=''/>
                        <p>class 2 truck</p>
                        <div>
                            <p># served</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p># turntaway</p>
                            <img src='' alt=''/>
                        </div>
                        <div>
                            <p><span>2000$</span>Total</p>
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

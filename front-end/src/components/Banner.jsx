import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
    return (
        <div>
            {/*--------------Left-side---------------*/}
            <div>
                <div>
                    <p>Book Appointment</p>
                    <p>With 100+ Trusted Doctors</p>
                </div>
                <button>Create Account</button>
            </div>
            {/*--------------Right-side---------------*/}
            <div>
                <img src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner
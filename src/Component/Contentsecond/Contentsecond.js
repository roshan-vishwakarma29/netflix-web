import React from 'react'
import './Contentsecod.css'
import mobileimg from '../../Assert/images/mobile-0819.jpg'

const Contentsecond = () => {
    return (
        <>
            <div className='ofline_watch'>
                <div className='watch_box'>
                    <div className='mobile'>
                        <img className='mobile_images' src={mobileimg} alt="" />
                    </div>
                    <div className='easily'>
                        <h1 className='favourites'>Download your shows to watch offline</h1>
                        <p className='watch' >Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contentsecond
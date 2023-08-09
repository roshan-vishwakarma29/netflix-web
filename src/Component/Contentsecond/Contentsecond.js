import React from 'react'
import './Contentsecod.css'
import mobileimg from '../../Assert/images/mobile-0819.jpg'
import stranger from '../../Assert/images/stranger.png'
import icon from '../../Assert/images/icon.gif'

const Contentsecond = () => {
    return (
        <>
            <div className='ofline_watch'>
                <div className='watch_box'>
                    <div className='mobile'>
                        <img className='mobile_images' src={mobileimg} alt="" />
                        <div className='overlap_mobile'>
                            <div>
                                <img src={stranger} style={{ height: "100px" }} alt="" />
                                <div>
                                    <p className='Things'>Stranger <br /> Things <br />
                                        <span>Downloading...</span></p>
                                </div>  
                            </div>
                            <div>
                                <img src={icon} s alt="" />
                            </div>

                        </div>
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
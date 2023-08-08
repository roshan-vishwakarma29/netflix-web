import React from 'react'
import './Steam.css'
import devicepile from '../../Assert/images/device-pile-in.png'
import Video from '../../Assert/Video/video-devices-in.mp4'

const Steam = () => {
    return (
        <>
            <div className='Watch'>
                <div className='Watch_child'>
                    <div className='everywhere'>
                        <h1 className='shows'> Watch  everywhere</h1>
                        <p className='Stream'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className='devicepile_img'>
                        <div className="image-overlap">
                        <img className='tvimage' style={{width:"100%"}} src={devicepile} alt="" />
                            {/* <img src={tvimg} className='tvimage' alt="" /> */}
                            <video className='videosss' src={Video} muted loop autoPlay />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Steam
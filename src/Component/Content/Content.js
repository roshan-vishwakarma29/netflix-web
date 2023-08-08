import React from 'react'
import './Content.css'
import tvimg from '../../Assert/images/tv.png'
import Video from '../../Assert/Video/video-1.mp4'


const Content = () => {
    return (
        <>
            <div className='all_content'>
                <div className='PlayStation_Xbox'>
                    <div className='Chromecast_Xbox'>
                        <h1 className='Enjoy'>Enjoy on your TV</h1>
                        <p className='PlayStation'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className='tv_adjest'>
                        <div className="image-overlap">
                            <img src={tvimg} className='tvimage' alt="" />
                            <video className='videoss' src={Video} muted loop autoPlay />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
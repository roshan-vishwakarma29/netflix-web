import React, { useState } from 'react'
import video from '../../Assert/Video/_import_60d962f06b3ef8.86089157_FPpreview.mp4'
import './Videos.css'

const Videos = () => {
    const [principle, setprinciple] = useState(1000)
    const [rate, setrate] = useState(5)
    const [time, settime] = useState(1)
    let value = (principle * rate * time) / 100;
    console.log(value)


    var numbers = 5
    let a = 1
    if (numbers < 0) {
        console.log("error")
    }
    else {
        let factorial = 1;
        for (a = 1; a <= numbers; a++) {
            factorial *= a;
        }
        console.log(factorial)
    }


    return (
        <div className='images_video'>
            <div className='video_example'>
                <video className='video' src={video} muted loop autoPlay />
            </div>


        </div>
    )
}

export default Videos
import React, { useState } from 'react'


const Accordion = ({ question, answer }) => {  //props
    const [show, setshow] = useState(false)
    return (
        <>
            <div className='parent_container'>
                <div className='child_container' onClick={() => setshow(!show)}>


                    <h3 className='question' >{question}</h3>
                    <p className='icon'> {show ? "✖️" : "➕"} </p>

                </div >
                {/* {show && <p className='answer'>{answer}</p>} */}
                {
                    show ? <p className='answer'>{answer}</p>
                        : null
                }
            </div>
            
        </>
        
    )
}

export default Accordion
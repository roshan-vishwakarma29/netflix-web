import React, { useState } from 'react'
import { questions } from '../../Api'
import Accordion from './Accordion'
import './Question.css'



const Question = () => {
    const [data, setdata] = useState(questions)
    return (
        <>
            <section className='main_container  Questions'>
                <p className='faq_headline'>Frequently Asked Questions</p>
                {
                    data.map((corentElement, index) => {
                        // const { id } = corentElement; //D_strecture
                        // console.log(corentElement)
                        // return <Accordion key={index} question={corentElement.question} index={index} answer={corentElement.answer} />;
                        return <div className='content'> <Accordion key={index} {...corentElement} /></div>
                    })
                }
                <p className='membership'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='e_mail'>
                    <div className='div'>
                        <form id="form" action="#">
                            {/* <input  type="email"  className="email"  placeholder='Email adderss' value={email} onChange={(e)=> setemail(e.target.value)}></input> */}
                            <div id="float-label">
                                <input type="email" />
                                <label htmlFor="email">
                                    Email addresh
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className='button_button'>
                        <button type='submit' className='btn btn-danger button'>Get started </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Question
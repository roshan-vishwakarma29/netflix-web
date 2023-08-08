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
            </section>
<p>Ready to watch? Enter your email to create or restart your membership.
</p>
        </>
    )
}

export default Question
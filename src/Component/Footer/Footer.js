import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer_parent'>
        <div className='footer_child'>
          <div className='list_left'>
            <ul className='ul_tag'>Questions? Call <span>000-800-919-1694</span> </ul>
            <li>FAQ</li>
            <li> Account</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Privacy</li>
            <li>Corporate Information</li>
            <li>Speed Test</li>
            <li>Only on Netflix</li>
          </div>
          <div className='list_right'>
            <li>Help Centre</li>
            <li>Media Centre</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>
              Cookie Preferences</li>
            <li>
              Contact Us</li>
            <li>
              Legal Notices</li>
          </div>

        </div>
        <div className='dropdown_Language'>
            <select className="Language" id="" >English
            <option value="">🌐 English</option>
            <option value="">Hindhi</option>    
            </select>
            </div>
        <div className='Netflix_India'>
        Netflix India
        </div>
      </div>

    </>
  )
}

export default Footer
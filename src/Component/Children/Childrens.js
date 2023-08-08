import React from 'react'
import './Childrens.css'
import childerns from '../../Assert/images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'

const Childrens = () => {
  return (
    <>
      <div className='childern_parent_div'>
        <div className='childern_child_div'>
          <div >
            <img className='kide_image' src={childerns} alt="" />
          </div>
          <div>
            <h1 className='profiles_kids'>
              Create profiles for kids
            </h1>
            <p className='children_characters'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Childrens
import React, { Children } from 'react'
import './App.css'
import Netflix from './Component/Banner/Netflix'
import Content from './Component/Content/Content'
import Contentsecond from './Component/Contentsecond/Contentsecond'
import Steam from './Component/Steam/Steam'
import Childrens from './Component/Children/Childrens'
import Question from './Component/Question/Question'
import Footer from './Component/Footer/Footer'
import Videos from './Component/video/Videos'



const App = () => {
  return (
    <>
      <Netflix />
      <Content />
      <Contentsecond />
      <Steam />
      <Childrens />
      <Question />
      <Footer />
    </>
  )
}

export default App
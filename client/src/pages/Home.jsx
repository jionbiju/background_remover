import React from 'react'
import Header from '../components/Header.jsx'
import Steps from '../components/Steps.jsx'
import Slider from '../components/Slider.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Upload from '../components/Upload.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Slider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home

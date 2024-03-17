import React from 'react'
import Footer from './Components/Footer'
import LandingContent from './Components/Section-1/LandingContent'
import Header from './Components/Header'
import About from './Components/Section-2/About'
import Obs from './Components/OBs/Obs'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  return (
    <div className='bg-gradient-to-b from-stone-900 to-stone-800'>
      <Header />
      <LandingContent />
      <About />  
      <Obs />
      <Footer />
    </div>
  )
}

export default App
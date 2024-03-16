import React from 'react'
import Footer from './Components/Footer'
import LandingContent from './Components/LandingContent'
import Header from './Components/Header'
import WhoWeAre from './Components/WhoWeAre'
import ImageSlides from './Components/ImageSlider'
import Carousel from './Components/Carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  return (
    <div className='bg-gradient-to-b from-stone-900 to-stone-800'>
      <Header />
      <LandingContent />
      {/* <ImageSlides /> */}
      <Carousel />
      <WhoWeAre />      
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import Footer from './Components/Footer'
import LandingContent from './Components/Section-1/LandingContent'
import NavBar from './Components/NavBar'
import About from './Components/Section-2/About'
import Obs from './Components/Section-5/Obs'
import SynthetixBanner from './Components/Section-4/SynthetixBanner'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageCarousel from './Components/Section-3/ImageCarousel'
import MusicPlayer from './Components/ExtraFeatures/MusicPlayer'
import VideoPlayer from './Components/ExtraFeatures/VideoPlayer'

const App = () => {
  return (
    <div className='whole-website bg-gradient-to-b from-[#178365] to-stone-900 '>
      <NavBar />
      <LandingContent />
      <MusicPlayer />
      <About /> 
      <VideoPlayer />
      <ImageCarousel />
      <SynthetixBanner /> 
      <Obs />
      <Footer />
    </div>
  )
}

export default App
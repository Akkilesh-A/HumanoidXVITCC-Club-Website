import React,{useState,useEffect} from 'react'
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
import ProjectCards from './Components/ProjectCard/ProjectCards'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
     }, []);
  return (
    <div className='whole-website bg-gradient-to-b from-[#178365] to-stone-900 '>
      {loading ? <div className='flex text-white flex-col w-[100%] items-center justify-center h-[90vh]'>
                    <ClimbingBoxLoader
                    color={'#178376'}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    />
                </div> 
      :<div>
        <NavBar />
        <LandingContent />
        <MusicPlayer />
        <About /> 
        <ProjectCards /> 
        <VideoPlayer />
        <ImageCarousel />
        <SynthetixBanner /> 
        <Obs />
        <Footer />
        </div>}
    </div>
  )
}

export default App
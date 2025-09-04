import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import SmallNavbar from './components/SmallNavbar'
import HeroSection from './components/HeroSection'
import Product from './components/Product'
import Footer from './components/Footer'
import M1 from '../public/images/box1_image.jpg'
import M2 from '../public/images/box2_image.jpg'
import M3 from '../public/images/box3_image.jpg'
import M4 from '../public/images/box4_image.jpg'
import M5 from '../public/images/box5_image.jpg'
import M6 from '../public/images/box6_image.jpg'
import M7 from '../public/images/box7_image.jpg'
import M8 from '../public/images/box8_image.jpg'
const App = () => {
  return (
    <div>
      <Navbar />
      <SmallNavbar />
      <HeroSection />
      <div className='flex items-center justify-center flex-wrap'>
        <Product title="Colths" image={M1} />
        <Product title="Health & Personal" image={M2} />
        <Product title="Furnature" image={M3} />
        <Product title="Electronic" image={M4} />
        <Product title="Beauty Fixs" image={M5} />
        <Product title="pet Care" image={M6} />
        <Product title="New Arrival in Toys" image={M7} />
        <Product title="Discover Fishion" image={M8} />
      </div>
      <div className='font-bold text-white bg-gray-600 h-10 flex justify-center items-center hover:bg-gray-900'> 
        <a href='#'>BACK TO TOP</a>
      </div>
      <Footer/>
    </div>
  )
}

export default App

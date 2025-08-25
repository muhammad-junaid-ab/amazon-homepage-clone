import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import SmallNavbar from './components/SmallNavbar'
import HeroSection from './components/HeroSection'
import Product from './components/Product'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <SmallNavbar />
      <HeroSection />
      <div className='flex items-center justify-center flex-wrap'>
        <Product title="Colths" image={'../public/images/box1_image.jpg'} />
        <Product title="Health & Personal" image={'../public/images/box2_image.jpg'} />
        <Product title="Furnature" image={'../public/images/box3_image.jpg'} />
        <Product title="Electronic" image={'../public/images/box4_image.jpg'} />
        <Product title="Beauty Fixs" image={'../public/images/box5_image.jpg'} />
        <Product title="pet Care" image={'../public/images/box6_image.jpg'} />
        <Product title="New Arrival in Toys" image={'../public/images/box7_image.jpg'} />
        <Product title="Discover Fishion" image={'../public/images/box8_image.jpg'} />
      </div>
      <div className='font-bold text-white bg-gray-600 h-10 flex justify-center items-center hover:bg-gray-900'> 
        <a href='#'>BACK TO TOP</a>
      </div>
      <Footer/>
    </div>
  )
}

export default App

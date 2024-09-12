import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Carousel from '../components/Carousel.jsx'
import Footer from '../components/Footer.jsx'
import FreeBook from '../components/FreeBook.jsx'
import Banner from '../components/Banner.jsx'
function Home() {
  return (
    <>
     <Navbar/>
     <Carousel/>
     <Banner/>
    <FreeBook/>
    <Footer/>
    </>
  )
}

export default Home
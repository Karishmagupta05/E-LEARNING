import React from 'react'
import Hero from "./hero/Hero"
import AboutCard from '../about/AboutCard'
import HAbout from "./HAbout"
import Test from './testiomonal/Testimonal'
import Hprice from "./Hprice"
import Footer from '../common/footer/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <AboutCard/>
        <HAbout />
        <Test/>
        <Hprice />
        <Footer/>
    </>
  )
}

export default Home
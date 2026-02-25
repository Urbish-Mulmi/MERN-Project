import React from 'react'
import { FaArrowRight } from "react-icons/fa";


import Hero from '../components/home/Hero'
import AboutUs from '../components/home/AboutUs';
import GetRecipeCarousel from '../components/home/GetRecipeCarousel';
import OurRecipes from '../components/home/OurRecipes';
import OurServices from '../components/home/OurServices';
import Testimonials from '../components/home/Testimonials';
import HomeInquiry from '../components/home/HomeInquiry';
import Map from '../components/common/Map';


const Home = () => {
  return (
    <div>
      {/* Home page renders hero and recipe pages */}
        <Hero/>
        <AboutUs />
        <OurRecipes/>
        <OurServices/>
        <Testimonials/>
        <HomeInquiry/>
       
        {/*  Display recipe carousel with limited cuisine items */}
        <GetRecipeCarousel/>    
        
        <Map/>            
        
    </div>
  )
}

export default Home



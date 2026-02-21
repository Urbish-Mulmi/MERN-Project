import React from 'react'
import Hero from '../components/Hero'
import { FaArrowRight } from "react-icons/fa";
import Recipes from '../components/Recipes';
import Map from '../components/Map';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Recipes/>
        <Map/>
        
    </div>
  )
}

export default Home



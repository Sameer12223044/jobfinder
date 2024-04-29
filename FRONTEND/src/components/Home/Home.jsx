import React, { useContext } from 'react'
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowitWorks from "./HowitWorks";
import PolpularCompanes from "./PolpularCompanes";
import PopularCategory from "./PopularCategory";



const Home = () => {
  const { isAuthorized }=useContext(Context);
  if(!isAuthorized){
    return <Navigate to={"/login"}/>;

  }
  return (
    <section className='homePage page'>
      <HeroSection/>
      <HowitWorks/>
      <PopularCategory/>
      <PolpularCompanes/>

    </section>
  )
}

export default Home

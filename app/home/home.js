import React, { Fragment } from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FooterTop from "./components/FooterTop";
import FooterBottom from "./components/FooterBottom";
export const Home = () => {
  return(
    <Fragment>
      <Topbar/>
      <Header/>
       <Hero/>
      <About/>
      <Services/>
       <FooterTop/>
      <FooterBottom/> 
     </Fragment>
  );
   
};

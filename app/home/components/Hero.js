"use client";
import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Hero() {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed:2000,
  };
  return (
    
    <Slider   {...settings} >
      <div className="bg-hero1 bg-cover flex items-center md:h-[calc(100vh-100px)] h-[calc(80vh-100px)] w-full">
        <div className="flex flex-col items-center h-full justify-center">
        <h2 className="text-center text-white lg:font-bold md:font-medium  lg:text-7xl md:text-5xl text-4xl capitalize   ">provide devOps solutions & cloud services</h2>
        <Link className="bg-sky-600 hover:bg-sky-500 uppercase md:px-[49px] px-[20px]  md:py-[15px] py-[10px] text-white text-lg font-medium mt-4" href="#">learn more</Link>
        </div>
      </div>
           <div className="bg-hero3 bg-cover flex items-center md:h-[calc(100vh-100px)] h-[calc(80vh-100px)] w-full">
           <div className="flex flex-col items-center h-full justify-center">
        <h2 className=" text-center text-white md:font-medium lg:text-6xl md:text-4xl text-3xl capitalize">Revolutionize your software delivery with DevOps excellence</h2>
        <Link className="bg-sky-600 hover:bg-sky-500 uppercase md:px-[49px] px-[20px]  md:py-[15px] py-[10px] text-white text-lg font-medium mt-4" href="#">learn more</Link>
        </div>
      </div>
    </Slider>
  );
}

export default Hero;

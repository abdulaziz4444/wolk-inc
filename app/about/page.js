import React from "react";
import Topbar from "../home/components/Topbar";
import Header from "../home/components/Header";
import Link from "next/link";
import Image from "next/image";
import hero from "@/public/images/hero2.jpg";
import FooterTop from "../home/components/FooterTop";
import FooterBottom from "../home/components/FooterBottom";
const Aboutpage = () => {
  return (
    <>
      <Topbar />
      <Header />
      <div className="bg-hero4 bg-cover md:h-[calc(85vh-100px)]  h-[calc(90vh-100px)] w-full flex items-center">
        <div className="md:container mx-auto md:px-40 px-16">
          <div className="flex">
            <li className="list-none">
              <Link href="/" className="uppercase text-white hover:underline">
                home /
              </Link>
            </li>
            <li className="uppercase text-white list-none">About</li>
          </div>
          <span className="capitalize text-white lg:text-5xl md:text-3xl sm:text-2xl text-xl font-semibold">
            about us
          </span>
        </div>
      </div>
      <div className="md:container mx-auto px-8">
        <div className="grid xl:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 lg:py-20 py-10">
          <div>
            <Image src={hero} width={700} alt="img" className="" />
          </div>
          <div>
            <h2 className="capitalize font-semibold md:text-2xl text-xl ">
              About Wolkinc
            </h2>
            <p className="text-zinc-500">
              Wolkinc is a leading technology solutions provider specializing in
              DevOps, Cloud, Cyber Security, AI Development, Web 3/Blockchain
              Development, and Web Development services. Founded by industry
              veterans, we are committed to delivering innovative and reliable
              solutions that drive business success.
            </p>
            <h2 className="capitalize font-semibold md:text-2xl text-xl mt-6">
              Our Vision
            </h2>
            <p className="text-zinc-500">
              Our vision is to be the trusted partner for businesses worldwide,
              enabling them to achieve their digital transformation goals
              through state-of-the-art technology solutions and unparalleled
              expertise
            </p>
            <h2 className="capitalize font-semibold md:text-2xl text-xl mt-6">
              Why Choose Us
            </h2>
            <p className="text-zinc-500">
              <span className="font-medium text-lg">Expert Team:</span> Our team
              comprises seasoned professionals with extensive experience in
              DevOps, cloud computing, cyber security, AI.
            </p>
            <p className="text-zinc-500 mt-4">
             <span className="font-medium text-lg">Customer-Centric Approach:</span> We tailor our solutions to meet the
              specific needs of each client, ensuring maximum impact and satisfaction.
            </p>
          </div>
        </div>
      </div>
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default Aboutpage;

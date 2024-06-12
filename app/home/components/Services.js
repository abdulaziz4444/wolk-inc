import React from "react"
import { SiAzuredevops } from "react-icons/si";
import { GrCloudComputer } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { DiWebplatform } from "react-icons/di";
import { SiBlockchaindotcom } from "react-icons/si";
const Services = () => {
  return (
    <div className="bg-gray-300 lg:mt-32 mt-20 lg:py-40 py-20 relative">
      <div className="flex flex-col  items-center gap-5 ">
        <span className="uppercase text-sky-600 font-medium">
          popular services
        </span>
        <h2 className="font-semibold capitalize lg:text-5xl md:text-4xl text-3xl text-center mb-10">
          we provide our client with the <br /> best services
        </h2>
      </div>
      <div className="md:container mx-auto px-5">
        <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-4 md:mt-10 mt-4">
          <div className="flex flex-col items-center group bg-white hover:bg-sky-600 bg gap-1 py-10">
          <SiAzuredevops className="text-sky-600 w-7 h-7 group-hover:text-white"/>
          <div>
          <span className="font-semibold text-lg  group-hover:text-white hover:underline cursor-pointer">DevOps Services</span>
          </div>
          <p className="text-sm text-zinc-600 group-hover:text-white text-center">Streamlining Development</p>
          </div>
          <div className="flex flex-col items-center group bg-white hover:bg-sky-600 gap-1 py-10">
          <GrCloudComputer className="text-sky-600 w-7 h-7 group-hover:text-white"/>
          <div>
          <span className="font-semibold text-lg  group-hover:text-white hover:underline cursor-pointer">Cloud Services</span>
          </div>
          <p className="text-sm text-zinc-600 group-hover:text-white text-center"> Your Business with Our Cloud Solutions</p>
          </div>
          <div className="flex flex-col items-center group bg-white hover:bg-sky-600 gap-1 py-10">
          <MdOutlineSecurity className="text-sky-600 w-7 h-7 group-hover:text-white"/>
          <div>
          <span className="font-semibold text-lg  group-hover:text-white hover:underline cursor-pointer">Cyber Security Services</span>
          </div>
          <p className="text-sm text-zinc-600 group-hover:text-white text-center">Unmatched Security for a Digital World</p>
          </div>
          <div className="flex flex-col items-center group bg-white hover:bg-sky-600 gap-1 py-10">
          <DiWebplatform className="text-sky-600 w-7 h-7 group-hover:text-white"/>
          <div>
          <span className="font-semibold text-lg  group-hover:text-white hover:underline cursor-pointer">Web Developmen Services</span>
          </div>
          <p className="text-sm text-zinc-600 group-hover:text-white">Crafting Websites that Wow</p>
          </div>
          <div className="flex flex-col items-center group bg-white hover:bg-sky-600 gap-1 py-10">
          <SiBlockchaindotcom className="text-sky-600 w-7 h-7 group-hover:text-white"/>
          <div>
          <span className="font-semibold text-lg  group-hover:text-white hover:underline cursor-pointer">Blockchain Development</span>
          </div>
          <p className="text-sm text-zinc-600 group-hover:text-white">Building Decentralized Futures</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

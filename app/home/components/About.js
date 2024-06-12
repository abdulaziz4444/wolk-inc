import React from "react";
import Image from "next/image";
import { SiAzuredevops } from "react-icons/si";
import { GrCloudComputer } from "react-icons/gr";
const About = () => {
  return (
    <>
      <div className="md:container mx-auto px-5">
        <div className="grid lg:grid-cols-2 grid-col-1 2xl:gap-4 lg:gap-8 gap-20 lg:pt-24 pt-16 2xl:px-10 lg:px-12 sm:px-12">
          <div className="relative w-full">
            <Image
              src="/images/about1.jpg"
              alt="about1"
              width={435}
              height={579}
            />
            <div className="absolute 2xl:-bottom-8 bottom-0 md:right-12 right-0">
              <Image
                src="/images/about2.jpg"
                alt="about2"
                width={263}
                height={329}
              />
            </div>
            <div className=" flex items-center justify-center gap-2 absolute lg:-bottom-16 bottom-8 left-20 bg-gray-200 rounded-l-full md:px-16 sm:px-12 px-4 md:py-6 sm:py-4 py-2 border-r-8 border-r-sky-600 ">
              <p className="capitalize font-bold text-lg">
                years <br></br>experience
              </p>
              <span className="text-sky-600 md:text-7xl  text-4xl font-semibold">
                10
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:gap-7 gap-4 ">
            <span className="text-sky-600 uppercase font-medium ">
              about company
            </span>
            <h2 className="font-semibold md:text-5xl text-3xl capitalize">
              the best consultation company
            </h2>
            <p className="md:text-base text-sm text-zinc-600 leading-8  ">
              Since from 2023 Building Your Better DevOps & Cloud Solutions.
              wolkinc specializes in providing expert advisory services for a
              seamless technological journey.
            </p>
            <p className="md:text-base text-sm text-zinc-600">
              Passionately Tackling Challenges, Forging New Frontiers
            </p>
            <div className="flex xl:flex-row flex-col lg:gap-12 gap-2 mx-auto lg:mr-16 ">
              <div className=" bg-gray-300 w-[290px] h-[139px]  py-8 px-8 mb-5">
                <div className="flex  gap-4 items-center justify-center">
                  <SiAzuredevops className="w-10 h-10" />
                  <span className="capitalize text-sky-600 text-2xl font-bold">
                    devOps consultant
                  </span>
                </div>
                <p className="text-center capitalize text-zinc-600">
                  smarter solutions
                </p>
              </div>
              <div className=" bg-gray-300 w-[290px] h-[139px] py-8 px-8">
                <div className="flex gap-4 items-center justify-center">
                  <GrCloudComputer className="w-10 h-10" />
                  <span className="capitalize text-sky-600 text-2xl font-bold ">
                    cloud specialist
                  </span>
                </div>
                <p className="text-center capitalize text-zinc-600 pl-4 ">
                  faster solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

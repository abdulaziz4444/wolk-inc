import React from "react";
import Image from "next/image";
import { Logo } from "@/public/icons/icons";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
const FooterTop = () => {
  return (
    <>
      <div className="bg-sky-900">
        <div className="md:container mx-auto px-5">
          <div className="md:flex md:flex-row flex-col justify-evenly sm:py-20 py-10">
            <div className="flex flex-col ">
            <Image src="/images/logo.svg"width={180} height={150}/>
              <p className=" text-zinc-400 lg:w-72 w-56  py-6">
                We work with a passion of taking challenges and on creating
                cutting-edge solutions for streamlined operations.
              </p>
              <div>
              <Link href="https://www.linkedin.com/company/wolk-inc/">
              <LiaLinkedinIn className="text-white border p-1  hover:bg-blue-300 bg-sky-900 rounded-full w-8 h-8" />
              </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:mt-1 mt-10">
              <h2 className="text-white font-medium lg:text-3xl text-2xl capitalize">
                services
              </h2>
              <Link
                className="text-zinc-400 capitalize hover:text-white"
                href="#"
              >
                cost optimization
              </Link>
              <Link
                className="text-zinc-400 capitalize hover:text-white"
                href="#"
              >
                cloud migration
              </Link>
              <Link
                className="text-zinc-400 capitalize hover:text-white"
                href="#"
              >
                cloud services
              </Link>
              <Link
                className="text-zinc-400 capitalize hover:text-white"
                href="#"
              >
                CI/CD pipeline
              </Link>
              <Link
                className="text-zinc-400 capitalize hover:text-white"
                href="#"
              >
                infrastructure as code
              </Link>
              <Link
                className="text-zinc-400 capitalize hover:text-white"
                href="#"
              >
                container orchestration
              </Link>
            </div>
            <div className="flex flex-col gap-3 lg:mt-1 mt-10  lg:pl-10 pl-0">
                <h2 className="text-white font-medium lg:text-3xl text-2xl capitalize">contact</h2>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-sky-300"/>
                  <Link className="text-zinc-400 text-sm  hover:text-white" href="tel:+994557281746">+994557281746</Link>
                </div>
              <div className="flex items-center gap-3 ">
                <MdEmail className="text-sky-300" />
                <Link
                  className="text-zinc-400 text-sm  hover:text-white "
                  href="mailto:info@wolkinc.com"
                >
                  info@wolkinc.com
                </Link>
              </div>
              <div className="flex items-center gap-3 ">
                <FaLocationPin className="text-sky-300 " />
                <Link
                  className="text-zinc-400 text-sm "
                  href="https://www.google.com/maps/place/Azerbaijan,Baku"
                >
                  Azerbaijan, Baku
                </Link>
              </div>
            </div>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;

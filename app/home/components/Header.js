"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaPhoneAlt } from "react-icons/fa";
// icons
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [open, issetOpen] = useState(false);

  const handlemenu = () => {
    issetOpen(!open);
  };
   return (
    <>
    <div className="bg-white py-4 sticky top-0 left-0 w-full z-10">
      <header className="md:container mx-auto px-5">
        <div className="flex justify-between items-center">
          <div className="">
            <Link href="/"><Image src="/images/logo.svg"width={130} height={100}/></Link>
          </div>
            <ul className="md:flex lg:gap-16 gap-6 hidden">
              <Link
                className="text-lg uppercase text-zinc-500 hover:text-black" href="/">
                home
              </Link>
              <Link
                className="text-lg uppercase text-zinc-500 hover:text-black" href="/about">
                about us
              </Link>
              <Link
                className="text-lg uppercase text-zinc-500 hover:text-black" href="/services">
                services
              </Link>
              <Link
                className="text-lg uppercase text-zinc-500 hover:text-black" href="#">
                projects
              </Link>
              <Link
                className="text-lg uppercase text-zinc-500 hover:text-black" href="/contact">
                contact
              </Link>
            </ul>
          <span className="md:hidden flex items-center">
                  <IoMdMenu
                    onClick={handlemenu}
                    className="sm:w-10 w-8 sm:h-10 h-8 "
                  />
                </span>
        </div>
      </header>
      </div>
      {open && (
        <>
          <div className="bg-sky-900 w-[309px] fixed top-0 left-0 h-full z-10">
          <span className="float-end pt-2">
              <RxCross2 onClick={handlemenu} className=" w-7 h-7 text-white"/>
            </span>
            <ul className="flex flex-col gap-4 pl-4 pt-5">
              
              <Link
                className="text-lg uppercase text-white   border-b border-blue-300 pb-2" href="/">
                home
              </Link>
              <Link
                className="text-lg uppercase text-white  border-b border-blue-300 pb-2" href="/about">
                about us
              </Link>
              <Link
                className="text-lg uppercase text-white  border-b border-blue-300 pb-2" href="#">
                services
              </Link>
              <Link
                className="text-lg uppercase text-white  border-b border-blue-300 pb-2" href="#">
                projects
              </Link>
              <Link
                className="text-lg uppercase text-white pb-4" href="/contact">
                contact
              </Link>
            </ul>
            {/* topbar navbar for mmalm screen */}
            <div className="flex flex-col pl-4 gap-4">
              <div className="flex gap-2">
                <FaPhoneAlt className="text-sky-300"/>
              <Link className="text-sm text-white" href="tel:+994557281746">+994557281746</Link>
              </div>
          <div className="flex gap-2">
            <MdEmail className="text-sky-300"/>
            <Link className="text-sm  text-white " href="mailto:info@wolkinc.com">info@wolkinc.com</Link>
          </div>
          <div className="flex gap-2">
            <FaLocationPin className="text-sky-300 " />
            <Link className=" text-sm text-white"  href="https://www.google.com/maps/place/Azerbaijan,Baku">Azerbaijan, Baku</Link>
          </div>
          <div className="">
            <Link href="https://www.linkedin.com/company/wolk-inc/">
            <LiaLinkedinIn  className="bg-white rounded-lg w-6 h-6 "/>
            </Link>
          </div>
          </div>
          </div>
          {/* topbar navbar for small screen */}
         </>
      )}
      <div className="bg-black opacity-20"></div>
    </>
  );
};
export default Header;

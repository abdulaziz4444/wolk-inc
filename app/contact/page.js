import React from "react";
import Topbar from "../home/components/Topbar";
import Header from "../home/components/Header";
import Link from "next/link";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import FooterTop from "../home/components/FooterTop";
import FooterBottom from "../home/components/FooterBottom";
const Contactpage = () => {
  return (
    <>
      <Topbar />
      <Header />
      <div className="bg-hero4 bg-cover md:h-[calc(85vh-100px)] h-[calc(90vh-100px)] w-full flex items-center md:mb-24 mb-12">
        <div className="md:container mx-auto md:px-40 px-16">
          <div className="flex">
            <li className="list-none">
              <Link href="/" className="uppercase text-white">
                home /
              </Link>
            </li>
            <li className="uppercase text-white list-none">contact</li>
          </div>
          <span className="capitalize text-white lg:text-5xl md:text-3xl sm:text-2xl text-xl font-semibold">
            contact us
          </span>
        </div>
      </div>
      <div className="md:container mx-auto md:px-16 px-5">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-full p-5 bg-gray-200">
            <h2 className="md:text-4xl text-xl font-semibold mb-5 capitalize">
              Join Us To Get Consultations
            </h2>
            <form>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full md:py-4 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full md:py-4 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Write message"
                  rows="4"
                ></textarea>
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold md:py-4 py-2 md:px-5 px-2 rounded focus:outline-none focus:shadow-outline uppercase"
                type="button"
              >
                send message
              </button>
            </form>
          </div>

          <div className="w-full p-5 bg-blue-600 text-white flex flex-col items-center justify-center">
            <span className="uppercase md:text-3xl text-xl font-semibold mb-3 ">
              address
            </span>
            <div className="flex items-center gap-3">
              <FaLocationPin className="text-sky-300 md:w-6 w-4 md:h-6 h-4" />
              <Link
                className="md:text-xl text-sm"
                href="https://www.google.com/maps/place/Azerbaijan,Baku"
              >
                Azerbaijan, Baku
              </Link>
            </div>
            <span className="uppercase md:text-3xl text-xl font-semibold mt-6 mb-3 ">
              phone
            </span>
            <div className="flex items-center gap-3 ">
              <FaPhoneAlt className="text-sky-300 md:w-6 w-4 md:h-6 h-4" />
              <Link
                className="md:text-xl text-sm  hover:underline"
                href="tel:+994557281746"
              >
                +994557281746
              </Link>
            </div>
            <span className="uppercase md:text-3xl text-xl font-semibold mt-6 mb-3 ">
              email
            </span>
            <div className="flex items-center gap-3 md:ml-10 ">
              <MdEmail className="text-sky-300 md:w-6 w-4 md:h-6 h-4" />
              <Link
                className="md:text-xl text-sm hover:underline "
                href="mailto:info@wolkinc.com"
              >
                info@wolkinc.com
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/wolk-inc/">
                <LiaLinkedinIn className="text-white border p-1 mt-6 hover:bg-blue-900 bg-sky-300 rounded-full w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-24 mt-12">
      <FooterTop />
      <FooterBottom />
      </div>
    </>
  );
};

export default Contactpage;

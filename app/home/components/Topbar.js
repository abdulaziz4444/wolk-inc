import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import Link from "next/link";
const Topbar = () => {
  return (
    <div className="bg-sky-900 py-[11px] md:block hidden">
      <div className="md:container mx-auto px-5">
        <div className="flex justify-between ">
          <div>
            <p className="md:text-sm text-xs text-zinc-400">
              Welcome to wolkinc - Your DevOps and Cloud Partner
            </p>
          </div>
          <div className="flex lg:gap-16 md:gap-6 gap-2 items-center">
          <div className="md:flex items-center gap-2">
            <MdEmail className="text-blue-300"/>
            <Link className="text-zinc-400 md:text-sm text-xs hover:text-white " href="mailto:info@wolkinc.com">info@wolkinc.com</Link>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationPin className="text-blue-300 " />
            <Link className="text-zinc-400 md:text-sm text-xs hover:text-white"  href="https://www.google.com/maps/place/Azerbaijan,Baku">Azerbaijan, Baku</Link>
          </div>
          <div >
            <Link href="https://www.linkedin.com/company/wolk-inc/">
            <LiaLinkedinIn  className="bg-white hover:bg-blue-300"/>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

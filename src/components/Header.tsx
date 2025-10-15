import React from "react";
import headerLink from "@/data/HeaderData";
import whiteLogo from "@/assets/images/whiteLogo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="hidden md:block">
      <div className="w-full h-[86px] flex justify-between items-center text-white px-20 bg-linear-65 from-[#05B5FF] to-[#FF239A]">
        <Link href="/" className="w-[132px] h-[42px] relative">
          <Image src={whiteLogo} alt="Logo" fill className="object-contain" />
        </Link>

        <div className="flex gap-8">
          {headerLink.map((header, index) => (
            <Link
              key={index}
              href={header.link}
              className="text-[24px] font-semibold"
            >
              {header.name}
            </Link>
          ))}
        </div>

        <Link
          href="/create-event"
          className="w-[189px] h-[49px] bg-[#05B5FF] rounded-lg flex justify-center items-center font-medium text-[24px] text-white"
        >
          Create Event
        </Link>
      </div>
    </nav>
  );
};

export default Header;

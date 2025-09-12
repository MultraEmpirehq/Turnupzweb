import VendorInfo from "@/components/SignUp/VendorInfo";
import TurnupzBg from "@/assets/images/Turnupz.png";
import shortLogo from "@/assets/images/short-logo.png";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center px-20 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${TurnupzBg.src})` }}
    >
      <div className="absolute top-6 left-6 w-[67px] h-[67px]">
        <Image
          src={shortLogo}
          alt="short-logo"
          fill
          className="object-contain"
        />
      </div>
      <VendorInfo />
    </div>
  );
};

export default page;

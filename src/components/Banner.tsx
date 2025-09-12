import Image from "next/image";
import React from "react";
import turnups from "@/assets/images/Turnupz.png";

const Banner = () => {
  return (
    <div className="flex-1 bg-yellow-900 h-full w-full rounded-[16px] relative">
      <Image
        src={turnups}
        alt="banner"
        fill
        className="absolute object-cover rounded-[16px]"
      />
    </div>
  );
};

export default Banner;

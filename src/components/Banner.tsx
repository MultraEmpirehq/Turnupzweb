import Image from "next/image";
import React from "react";
import turnups from "@/assets/images/Turnupz.png";

const Banner = () => {
  return (
    <div className="hidden md:block flex-1 h-full rounded-xl relative">
      <Image
        src={turnups}
        alt="banner"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
};

export default Banner;

import React from "react";
import Link from "next/link";
import { CompanyInfo, Help, Categories, FollowUs } from "@/data/FooterData";

const Footer = () => {
  return (
    <footer className="w-full h-[361px] bg-[#2B293D] flex px-48 flex flex-col justify-center text-[#A9A9A9]">
      <div className="flex gap-20 mb-10">
        {/* Comapany Info */}
        <div>
          {CompanyInfo.map((info, index) => (
            <div key={index} className="mb-4">
              {/* If header exists, show it */}
              {info.header && (
                <p className="font-semibold text-[18px] text-white mb-2">
                  {info.header}
                </p>
              )}

              {/* If items exist, loop through them */}
              {info.items &&
                info.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block text-[#A9A9A9] text-[13px] font-normal hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          ))}
        </div>

        {/* Help */}
        <div>
          {Help.map((info, index) => (
            <div key={index} className="mb-4">
              {/* If header exists, show it */}
              {info.header && (
                <p className="font-semibold text-[18px] text-white mb-2">
                  {info.header}
                </p>
              )}

              {/* If items exist, loop through them */}
              {info.items &&
                info.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block text-[#A9A9A9] text-[13px] font-normal hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          ))}
        </div>

        {/* Categories */}
        <div>
          {Categories.map((info, index) => (
            <div key={index} className="mb-4">
              {/* If header exists, show it */}
              {info.header && (
                <p className="font-semibold text-[18px] text-white mb-2">
                  {info.header}
                </p>
              )}

              {/* If items exist, loop through them */}
              {info.items &&
                info.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block text-[#A9A9A9] text-[13px] font-normal hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          ))}
        </div>

        {/* Follow Us */}
        <div>
          {FollowUs.map((info, index) => (
            <div key={index} className="mb-4">
              {/* If header exists, show it */}
              {info.header && (
                <p className="font-semibold text-[18px] text-white mb-2">
                  {info.header}
                </p>
              )}

              {/* If items exist, loop through them */}
              {info.items &&
                info.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block text-[#A9A9A9] text-[13px] font-normal hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>

      <hr />

      <p className="text-center mt-4">
        &copy; 2025 Turnupz. All rights reserved.
      </p>

      <div></div>
    </footer>
  );
};

export default Footer;

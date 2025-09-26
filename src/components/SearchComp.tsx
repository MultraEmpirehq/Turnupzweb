"use client";

import { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const SearchComp = () => {
  const [location, setLocation] = useState("Lagos");
  const [open, setOpen] = useState(false);

  const locations = ["Lagos", "Abuja", "Port Harcourt", "Ibadan"];

  return (
    <div
      className="w-full h-[477px] bg-center bg-cover flex flex-col justify-center items-center relative"
      style={{ backgroundImage: "url('/images/events/cardImage.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <p className="font-bold text-[48px] text-white">
        Explore a world of events. Find what excites you!
      </p>

      {/* Search */}
      <div className="w-full flex justify-center mt-6">
        <div className="flex w-[1136px] h-[80px] bg-white rounded-[10px] relative">
          {/* Search Input */}
          <div className="flex items-center text-[#5A5A5A] px-4 w-[834px] ">
            <FiSearch className="mr-4 text-2xl" />
            <input
              type="text"
              placeholder="Victoria Island"
              className="w-full text-[20px] py-3 outline-none"
            />
          </div>

          {/* Divider */}
          <div className="w-px bg-[#5A5A5A]" />

          {/* Location Dropdown */}
          <div className="w-[302px] h-full ">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between px-4 py-3 w-full text-[#5A5A5A] h-full cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-4xl" />
                <span className="text-[22px]">{location}</span>
              </div>
              <FiChevronDown className="ml-2 text-2xl" />
            </button>

            {/* Dropdown List */}
            {open && (
              <div className="absolute mt-1 w-[302px] bg-white border rounded shadow-md">
                {locations.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setLocation(city);
                      setOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-[#5A5A5A]"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComp;

import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerImage from "@/assets/images/banner-image.png";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import EventCard from "@/components/EventCard";

const AppButton = [
  {
    icon: "/google-play.svg",
    appDes: "Get it on",
    appName: "Google Play",
  },
  {
    icon: "/apple.svg",
    appDes: "Download on the",
    appName: "App Store",
  },
];

const page = () => {
  return (
    <div className="w-full min-h-screen bg-[#F8F8F8]">
      <Header />

      {/* Content */}
      <div className="w-full flex flex-col items-center p-20">
        {/* Banner */}
        <div
          className="w-full h-[615px] rounded-[10px] bg-red-500 flex flex-col justify-center items-center gap-10 text-white bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bannerImage.src})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-[10px]" />

          <div className="relative z-100 text-center space-y-10">
            <p className="text-[64px] font-extrabold">
              Discover Amazing Events
            </p>
            <p className="text-[32px] text-center font-normal">
              Download the Turnupz App to find and book the perfect events that{" "}
              <br /> match your interests
            </p>
            <div className="flex gap-10 w-full justify-center">
              {AppButton.map((btn, index) => (
                <div key={index} className="w-[202px] rounded-[10px] ">
                  <button
                    className={`w-full ${
                      index % 2 === 0 ? "text-black bg-white" : "bg-black"
                    } h-[74px] flex items-center justify-center gap-4 rounded-[10px] cursor-pointer`}
                  >
                    <div className="relative w-[36px] h-[36px]">
                      <Image
                        src={btn.icon}
                        alt="icon-logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[13px] text-left">
                      {btn.appDes} <br />{" "}
                      <span className="text-[15px]">{btn.appName}</span>
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Events */}
        <div className="w-full my-30">
          <p className="text-[36px] font-semibold mb-20">Trending Events</p>
          <div className="w-full flex flex-wrap gap-y-20 gap-x-10 justify-center items-center">
            <EventCard />
          </div>

          {/* See more */}
          <div className="w-full mt-30 text-center">
            <button
              type="button"
              className="border-[1.62px] border-[#05B5FF] bg-white w-[492px] h-[56px] rounded-lg text-[#2B293D] text-[22px] cursor-pointer"
            >
              See more
            </button>
          </div>
        </div>

        {/* Past Events */}
        <div className="w-full">
          <p className="text-[36px] font-semibold mb-20">Past Events</p>
          <div className="w-full flex flex-wrap gap-y-20 gap-x-10 justify-center items-center">
            <EventCard />
          </div>
          {/* See more */}
          <div className="w-full mt-30 text-center">
            <button
              type="button"
              className="border-[1.62px] border-[#05B5FF] bg-white w-[492px] h-[56px] rounded-lg text-[#2B293D] text-[22px] cursor-pointer"
            >
              See more
            </button>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default page;

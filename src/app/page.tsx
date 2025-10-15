import Header from "@/components/Header";
import React from "react";
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

      {/* Desktop Content */}
      <div className="hidden md:block">
        <div className="w-full flex flex-col items-center p-20">
          {/* Banner */}
          <div
            className="w-full h-[410px] md:h-[615px] rounded-[10px] flex flex-col justify-center items-center gap-4 md:gap-10 text-white bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bannerImage.src})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[10px]" />

            <div className="relative z-1000 text-center space-y-10">
              <p className="text-sub-header font-bold md:text-header md:font-extrabold">
                Discover Amazing Events
              </p>
              <p className="text-header-text md:text-sub-header text-center font-normal">
                Download the Turnupz App to find and book the perfect events
                that <br /> match your interests
              </p>
              <div className="flex flex-wrap gap-4 md:gap-10 w-full justify-center">
                {AppButton.map((btn, index) => (
                  <div
                    key={index}
                    className="w-[120px] md:w-[202px] rounded-[10px] "
                  >
                    <button
                      className={`w-full ${
                        index % 2 === 0 ? "text-black bg-white" : "bg-black"
                      } h-[54px] md:h-[74px] flex items-center justify-center gap-4 rounded-[10px] cursor-pointer`}
                    >
                      <div className="relative w-[24px] md:w-[36px] h-[24px] md:h-[36px]">
                        <Image
                          src={btn.icon}
                          alt="icon-logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[12px] md:text-footer-xs text-left">
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
          <div className="w-full my-10 md:my-30">
            <p className="text-primary-text font-semibold mb-10 md:mb-20 text-black">
              Trending Events
            </p>
            <div className="w-full flex flex-wrap gap-y-4 md:gap-y-20 gap-x-10 justify-center items-center">
              <EventCard />
            </div>

            {/* See more */}
            <div className="w-full mt-10 md:mt-30 text-center">
              <button type="button" className="seeMoreBtn cursor-pointer">
                See more
              </button>
            </div>
          </div>
          {/* Past Events */}
          <div className="w-full">
            <p className="text-[36px] font-semibold mb-20 text-black">
              Past Events
            </p>
            <div className="w-full flex flex-wrap gap-y-20 gap-x-10 justify-center items-center">
              <EventCard />
            </div>
            {/* See more */}
            <div className="w-full mt-30 text-center">
              <button type="button" className="seeMoreBtn cursor-pointer">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="block md:hidden p-4">
        <div className="w-full flex flex-col items-center">
          <div className="my-10">
            <Image
              src="/images/turnups-text.png"
              alt="Logo"
              width={67.72}
              height={21.57}
            />
          </div>
          <EventCard />
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default page;

"use client";

import React, { useState } from "react";
import EventCard from "../EventCard";
import Header from "../Header";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import SearchComp from "../SearchComp";

const exploreCategories = ["All", "Indoor", "Outdoor", "Sports", "Venue"];

const explorePopular = ["All", "Today", "Tomorrow", "This weekend", "Free"];

const ExplorePage = () => {
  const [activeCategories, setActiveCategories] = useState(0);
  const [activePopular, setActivePopular] = useState(0);

  return (
    <div className="w-full">
      <Header />

      <SearchComp />

      <div className="w-full px-20">
        <p className="text-[36px] font-medium my-20">Explore Categories</p>

        {/* Explore Tabs */}
        <div className="w-full flex justify-between">
          {exploreCategories.map((category, index) => (
            <span
              key={index}
              onClick={() => setActiveCategories(index)}
              className={`w-[179px] h-[79px] rounded-full flex justify-center items-center cursor-pointer border-2 text-[#2D2C3C] text-[23px] font-medium ${
                activeCategories === index
                  ? "border-[#ED2E95]"
                  : "border-[#7D7D7D]"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Tab Body */}
        <div className="w-full">
          {activeCategories === 0 && (
            <>
              {/* Popular Events */}
              <div className="w-full my-30">
                <div className="mb-20">
                  <p className="text-[36px] font-medium mb-4">
                    Popular Events in Lagos
                  </p>
                  <div className="w-[421px] flex justify-between">
                    {explorePopular.map((popular, index) => (
                      <span
                        key={index}
                        className="border border-[#6F6F6F] px-[12px] py-[4px] rounded-full bg-white text-[#6F6F6F] text-[12px] cursor-pointer"
                      >
                        {popular}
                      </span>
                    ))}
                  </div>
                </div>
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

              {/* Upcoming Events */}
              <div className="w-full my-30">
                <p className="text-[36px] font-medium mb-20">Upcoming Events</p>
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

              {/* Trending Events */}
              <div className="w-full my-30">
                <p className="text-[36px] font-medium mb-20">Trending Events</p>
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
            </>
          )}
          {activeCategories === 1 && <p>Indoors</p>}
          {activeCategories === 2 && <p>Outdoors</p>}
          {activeCategories === 3 && <p>Sports</p>}
          {activeCategories === 4 && <p>Venues</p>}
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default ExplorePage;

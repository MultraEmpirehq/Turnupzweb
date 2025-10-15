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

      <div className="hidden md:block">
        <div className="w-full px-20">
          <p className="text-[36px] font-medium my-10 md:my-20 text-black">
            Explore Categories
          </p>

          {/* Explore Tabs */}
          <div className="w-full flex justify-between">
            {exploreCategories.map((category, index) => (
              <span
                key={index}
                onClick={() => setActiveCategories(index)}
                className={`w-[179px] h-[79px] rounded-full flex justify-center items-center cursor-pointer border-2 text-dark-bluish-gray text-[23px] font-medium ${
                  activeCategories === index
                    ? "border-stepper"
                    : "border-stepper"
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
                <div className="w-full my-10 md:my-30">
                  <div className="mb-10 md:mb-20">
                    <p className="text-[36px] font-medium mb-2 md:mb-4 text-black">
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
                  <div className="w-full flex flex-wrap gap-y-10 md:gap-y-20 gap-x-10 justify-center items-center">
                    <EventCard />
                  </div>

                  {/* See more */}
                  <div className="w-full mt-10 md:mt-30 text-center">
                    <button type="button" className="seeMoreBtn cursor-pointer">
                      See more
                    </button>
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="w-full my-10 md:my-30">
                  <p className="text-[36px] font-medium mb-10 md:mb-20 text-black">
                    Upcoming Events
                  </p>
                  <div className="w-full flex flex-wrap gap-y-10 md:gap-y-20 gap-x-10 justify-center items-center">
                    <EventCard />
                  </div>

                  {/* See more */}
                  <div className="w-full mt-10 md:mt-30 text-center">
                    <button type="button" className="seeMoreBtn cursor-pointer">
                      See more
                    </button>
                  </div>
                </div>

                {/* Trending Events */}
                <div className="w-full my-10 md:my-30">
                  <p className="text-[36px] font-medium mb-10 md:mb-20 text-black">
                    Trending Events
                  </p>
                  <div className="w-full flex flex-wrap gap-y-10 md:gap-y-20 gap-x-10 justify-center items-center">
                    <EventCard />
                  </div>

                  {/* See more */}
                  <div className="w-full mt-10 md:mt-30 text-center">
                    <button type="button" className="seeMoreBtn cursor-pointer">
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
      </div>

      <div className="block md:hidden">
        <div className="w-full px-4">
          <p className="text-base font-bold text-btn-color mb-4">Categories</p>

          {/* Explore Tabs */}
          <div className="w-full flex justify-between">
            {exploreCategories.map((category, index) => (
              <span
                key={index}
                onClick={() => setActiveCategories(index)}
                className={`w-[70px] h-[30px] rounded-md flex justify-center items-center cursor-pointer border text-dark-bluish-gray text-[11px] font-medium ${
                  activeCategories === index
                    ? "border-primary bg-primary text-white"
                    : "border-primary text-primary"
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
                {/* Trending Events */}
                <div className="w-full my-4">
                  <p className="text-base font-bold text-btn-color mb-4">
                    Trending Events
                  </p>
                  <div className="w-full flex flex-wrap gap-y-4 gap-x-10 justify-center items-center">
                    <EventCard />
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="w-full my-4">
                  <p className="text-base font-bold text-btn-color mb-4">
                    Upcoming Events
                  </p>
                  <div className="w-full flex flex-wrap gap-y-4 gap-x-10 justify-center items-center">
                    <EventCard />
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
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default ExplorePage;

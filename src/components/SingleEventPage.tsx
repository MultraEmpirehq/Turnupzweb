"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/data/EventData";
import { Activity } from "@/data/EventData";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

interface Props {
  selectedEvent: Event | undefined;
}
interface ActivityProps {
  activity: Activity;
  index: number;
  selectedActivity: number | null;
  setSelectedActivity: (index: number) => void; // ✅ Explicit type
}

const eventStepper = ["Overview", "Media", "Activities", "Past Events"];

const SingleEventPage = ({ selectedEvent }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const ActivityItem = ({
    activity,
    index,
    selectedActivity,
    setSelectedActivity,
  }: ActivityProps) => {
    // const isSelected = selectedActivity === index;

    return (
      <div
        onClick={() => setSelectedActivity(index)}
        className="flex items-center gap-4 w-full md:w-[452.49px] h-[124px] md:h-[141.95px] px-2 cursor-pointer"
      >
        {/* Left: Date */}
        <div className="flex flex-col items-center justify-center text-primary font-bold text-base md:text-primary-base w-[52px] md:w-[59.12px]">
          <span>{activity.date}</span>
          <span className="text-btn-color">{activity.month}</span>
        </div>

        {/* <div className="w-0.5 h-full bg-neutral-white-700" /> */}
        {/* Dotted Line */}
        <div className="relative h-full w-[17px] flex items-center justify-center">
          <div className="absolute top-0 bottom-0 w-0.5 border-r border-dashed border-neutral-white-500 "></div>
          {/* Dot */}
          <div
            className={`w-4 h-4 rounded-full border-4 z-10 pl-[-20px] ${
              selectedActivity === index
                ? "bg-neutral-white-500 border-primary"
                : "bg-neutral-white-500 border-neutral-white-500"
            }`}
          ></div>
        </div>

        {/* Right: Details */}
        <div
          className={`w-full flex items-center border-l-2 h-[105.15px] px-2 rounded-md ${
            selectedActivity === index
              ? "border-btn-color"
              : "border-primary-700"
          }`}
        >
          <div className="w-full flex flex-col gap-2.5">
            <p
              className={`text-base md:text-primary-base font-bold ${
                selectedActivity === index
                  ? "text-primary"
                  : "text-neutral-white-700"
              }`}
            >
              {activity.performer}
            </p>

            <span className="bg-neutral-white-700 h-0.5 my-auto"></span>

            <p className="text-sm md:text-[15.92px] font-normal text-neutral-white-700 text-right">
              {activity.time}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-4 md:p-20 flex justify-center">
      {selectedEvent ? (
        <div className="w-full flex flex-col justify-center gap-4 md:gap-8">
          <p
            onClick={() => window.history.back()}
            className="text-black cursor-pointer"
          >
            Back
          </p>

          {/* Image */}
          <div className="w-full h-[249px] md:h-[448px] relative md:rounded-4xl">
            <Image
              src={selectedEvent.img}
              alt="Event Image"
              fill
              className="oject-contain md:rounded-t-4xl"
            />
          </div>
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-8">
              <p className="text-primary-base md:text-5xl font-bold md:font-medium text-black">
                {selectedEvent.eventName}
              </p>
              <span className="w-9 h-9 rounded-sm border border-dark-primary text-dark-primary flex items-center justify-center">
                <NotificationsActiveOutlinedIcon />
              </span>
            </div>
            <button
              type="button"
              className="hidden md:block w-[179px] h-14 bg-error-text rounded-xl cursor-pointer"
            >
              Book Now
            </button>
          </div>
          {/* Date and Time */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-7 text-dark-bluish-gray">
              <p className="font-bold text-4xl">Date and Time</p>
              <p className="flex items-center gap-5 text-2xl font-semibold">
                <CalendarMonthOutlinedIcon
                  style={{ width: "30px", height: "30px" }}
                />
                {selectedEvent.eventDate}
              </p>
              <p className="flex items-center gap-5 text-2xl font-semibold">
                <AccessTimeOutlinedIcon
                  style={{ width: "25px", height: "25px" }}
                />
                {selectedEvent.eventTime}
              </p>
            </div>
          </div>
          {/* Location */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-7 text-dark-bluish-gray">
              <p className="font-bold text-4xl">Location</p>
              <p className="flex gap-5 text-2xl font-semibold">
                <LocationOnOutlinedIcon
                  style={{ width: "25px", height: "25px" }}
                />
                <span className="leading-7 flex items-end whitespace-pre-line">
                  {selectedEvent.address}
                  <ContentCopyOutlinedIcon
                    onClick={() => {
                      navigator.clipboard.writeText(selectedEvent.address);
                      alert("Address copied!");
                    }}
                    className="cursor-pointer "
                    fontSize="small"
                  />
                </span>
              </p>
            </div>
          </div>
          {/* Description */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-7 text-dark-bluish-gray">
              <p className="font-bold text-4xl">Event Description</p>
              <p className="text-primary-base font-normal text-dark-grey whitespace-pre-wrap">
                {selectedEvent.description}
                <Link
                  href=""
                  className="text-[#FF239A] hover:underline hover:underline-offset-4"
                >
                  Join Group Chat
                </Link>
              </p>
            </div>
          </div>
          {/* Activities */}
          <div className="hidden md:block">
            <div className="w-full flex flex-col justify-center gap-7">
              <p className="font-bold text-4xl text-primary">Activities</p>
              <div className="grid ml-16 grid-cols-2 gap-10">
                {selectedEvent.activities.map((activity, index) => (
                  <ActivityItem
                    key={index}
                    activity={activity}
                    index={index}
                    selectedActivity={selectedActivity}
                    setSelectedActivity={setSelectedActivity}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Event Media */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-7 text-dark-bluish-gray">
              <p className="font-bold text-4xl">Event Media</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-3 text-dark-neutral-text text-sm">
                <p className="flex items-center gap-3">
                  <LocationOnOutlinedIcon /> {selectedEvent.address}
                </p>
                <p className="flex items-center gap-3">
                  <CalendarMonthOutlinedIcon /> {selectedEvent.eventDate}
                </p>
                <p className="flex items-center gap-3">
                  <AccessTimeOutlinedIcon /> {selectedEvent.eventTime}
                </p>
                <p className="flex items-center gap-3">
                  <Groups2OutlinedIcon />
                  <Link
                    href="/"
                    className="text-color-stepper underline underline-offset-4"
                  >
                    Join the Community
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="w-full flex justify-between">
                <button
                  type="button"
                  className=" w-[179px] h-14 bg-error-text rounded-xl cursor-pointer"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  className=" w-[179px] h-14 border text-share-btn border-share-btn rounded-xl cursor-pointer"
                >
                  Share
                </button>
              </div>

              {/* Stepper */}
              <div className="w-full">
                <div className="w-full flex justify-between mb-4 p-1 border border-neutral-white-500">
                  {eventStepper.map((eventOpt, index) => (
                    <span
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-[88px] h-8 border rounded-xl flex justify-center items-center text-[12px] cursor-pointer ${
                        activeStep === index
                          ? "border-stepper text-stepper"
                          : "border-neutral-white-700 text-neutral-white-700"
                      }`}
                    >
                      {eventOpt}
                    </span>
                  ))}
                </div>

                {/* Tab Body */}
                <div className="w-full gap-4 mb-4">
                  {/* Overview */}
                  {activeStep === 0 && (
                    <>
                      <p className="text-black font-bold text-primary-base">
                        Description
                      </p>
                      <p className="text-base text-dark-neutral-text leading-6 mt-4">
                        {selectedEvent.description}
                      </p>
                    </>
                  )}
                  {/* Media */}
                  {activeStep === 1 && (
                    <>
                      <div></div>
                    </>
                  )}
                  {/* Activities */}
                  {activeStep === 2 && (
                    <div className="grid grid-cols-1">
                      {selectedEvent.activities.map((activity, index) => (
                        <ActivityItem
                          key={index}
                          activity={activity}
                          index={index}
                          selectedActivity={selectedActivity}
                          setSelectedActivity={setSelectedActivity}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Not available</p>
      )}
    </div>
  );
};

export default SingleEventPage;

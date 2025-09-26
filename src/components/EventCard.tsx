import Image from "next/image";
import React from "react";
import { Events } from "@/data/EventData";
import Link from "next/link";

const EventCard = () => {
  return (
    <>
      {Events.map((event, index) => (
        <Link
          href={`/explore/${event.eventSlug}`}
          key={index}
          className="w-[413px] h-[372px] bg-white rounded-lg"
        >
          <div className=" w-full h-[205px] relative">
            {" "}
            <Image
              src={event.img}
              alt="Card Image"
              fill
              className="object-contain rounded-t-lg"
            />
          </div>
          <div className="px-8 py-4 flex gap-8  items-center">
            <div className="font-medium">
              <p className="text-[#05B5FF] text-[19px]">{event.month}</p>
              <p className="text-[22px] text-center">{event.date}</p>
            </div>
            <div className="text-[#5A5A5A] text-[17px] font-normal flex flex-col gap-[8px]">
              <p className="text-[#2D2C3C] font-medium">{event.eventName}</p>
              <p>{event.eventVenue}</p>
              <p className="text-[12px] font-medium">{event.eventTime}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default EventCard;

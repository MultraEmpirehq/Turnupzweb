import Image from "next/image";
import React from "react";
import { Events } from "@/data/EventData";
import Link from "next/link";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const EventCard = () => {
  return (
    <>
      {/* Desktop */}
      {Events.map((event, index) => (
        <Link
          href={`/explore/${event.eventSlug}`}
          key={index}
          className="eventCard hidden md:block"
        >
          <div className=" w-full h-[205px] relative">
            <Image
              src={event.img}
              alt="Card Image"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="px-8 py-4 flex gap-8 items-center">
            <div className="font-medium">
              <p className="text-primary text-[19px]">{event.month}</p>
              <p className="text-card-event-date text-center text-dark-bluish-gray">
                {event.date}
              </p>
            </div>
            <div className="text-dark-grey text-[17px] font-normal flex flex-col gap-[8px]">
              <p className="text-dark-bluish-gray font-medium">
                {event.eventName}
              </p>
              <p>{event.eventVenue}</p>
              <p className="text-xs font-medium">{event.eventTime}</p>
            </div>
          </div>
        </Link>
      ))}

      {/* Mobile */}
      <div className="w-full block md:hidden">
        {Events.map((event, index) => (
          <Link
            href={`/explore/${event.eventSlug}`}
            key={index}
            className="w-full h-[458px] flex flex-col border border-b mb-4 rounded-lg"
          >
            <div className=" w-full h-[390px] relative">
              <Image
                src={event.img}
                alt="Card Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-full flex justify-between items-center h-[60px] px-2">
              <div className="block text-dark-neutral-text">
                <p className="font-bold text-base mb-0.5">{event.eventName}</p>
                <p className="text-xs font-normal">{event.day}</p>
              </div>
              <MoreVertOutlinedIcon style={{ color: "#d9d9d9" }} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EventCard;

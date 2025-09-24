import React from "react";
import { Event } from "@/data/EventData";

interface Props {
  selectedEvent: Event | undefined;
}

const SingleEventPage = ({ selectedEvent }: Props) => {
  return (
    <div className="w-full min-h-screen px-20">
      {selectedEvent ? (
        <p className="text-2xl font-extrabold">{selectedEvent.eventName}</p>
      ) : (
        <p>Not available</p>
      )}
    </div>
  );
};

export default SingleEventPage;

import React from "react";
import SingleEventPage from "@/components/SingleEventPage";
import { Events } from "@/data/EventData";

const page = ({ params }: { params: { eventSlug: string } }) => {
  const selectedEvent = Events.find(
    (event) => event.eventSlug === params.eventSlug
  );
  return (
    <div className="w-full min-h-screen bg-background-color">
      <SingleEventPage selectedEvent={selectedEvent} />
    </div>
  );
};

export default page;

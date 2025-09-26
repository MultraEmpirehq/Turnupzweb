import React from "react";
import SingleEventPage from "@/components/SingleEventPage";
import { Events } from "@/data/EventData";

const page = ({ params }: { params: { eventSlug: string } }) => {
  const selectedEvent = Events.find(
    (event) => event.eventSlug === params.eventSlug
  );
  return (
    <div>
      <SingleEventPage selectedEvent={selectedEvent} />
    </div>
  );
};

export default page;

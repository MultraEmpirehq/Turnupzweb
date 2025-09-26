// types/Event.ts
export type Event = {
  img: string; // path from /public
  month: string;
  date: number;
  eventName: string;
  eventSlug: string;
  eventVenue: string;
  eventTime: string;
};

export const Events: Event[] = [
  {
    eventSlug: "lagos-freedom-fest",
    img: "/images/events/cardImage.png",
    month: "OCT",
    date: 25,
    eventName: "Lagos Freedom Fest",
    eventVenue: "Victoria Island, Lagos State",
    eventTime: "00:00 AM - 00:00 PM",
  },
  {
    eventSlug: "33-Export-Lager-Beer",
    img: "/images/events/cardImage2.png",
    month: "NOV",
    date: 25,
    eventName: "33 Export Lager Beer",
    eventVenue: "Sango otta, Ogun State",
    eventTime: "00:00 AM - 00:00 PM",
  },
  {
    eventSlug: "lagos-freedom-fest",
    img: "/images/events/cardImage.png",
    month: "OCT",
    date: 25,
    eventName: "Lagos Freedom Fest",
    eventVenue: "Victoria Island, Lagos State",
    eventTime: "00:00 AM - 00:00 PM",
  },
  {
    eventSlug: "lagos-freedom-fest",
    img: "/images/events/cardImage2.png",
    month: "NOV",
    date: 25,
    eventName: "33 Export Lager Beer",
    eventVenue: "Sango otta, Ogun State",
    eventTime: "00:00 AM - 00:00 PM",
  },
  {
    eventSlug: "lagos-freedom-fest",
    img: "/images/events/cardImage.png",
    month: "OCT",
    date: 25,
    eventName: "Lagos Freedom Fest",
    eventVenue: "Victoria Island, Lagos State",
    eventTime: "00:00 AM - 00:00 PM",
  },
  {
    eventSlug: "lagos-freedom-fest",
    img: "/images/events/cardImage2.png",
    month: "NOV",
    date: 25,
    eventName: "33 Export Lager Beer",
    eventVenue: "Sango otta, Ogun State",
    eventTime: "00:00 AM - 00:00 PM",
  },
];

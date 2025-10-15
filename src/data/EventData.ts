// types/Event.ts
export type Event = {
  img: string; // path from /public
  month: string;
  date: number;
  day: string;
  eventDate: string;
  eventName: string;
  eventSlug: string;
  eventVenue: string;
  eventTime: string;
  address: string;
  description: string;
  activities: Activity[];
};
export interface Activity {
  date: string;
  month: string;
  performer: string;
  time: string;
  description?: string;
}

export const Events: Event[] = [
  {
    eventSlug: "lagos-freedom-fest",
    img: "/images/events/cardImage.png",
    month: "OCT",
    date: 25,
    day: "Tuesday, October 1",
    eventDate: "Saturday, 2 December 2025",
    eventName: "Lagos Freedom Fest",
    eventVenue: "Victoria Island, Lagos State",
    eventTime: "00:00 AM - 00:00 PM",
    address:
      "U.J. Esuene Stadium\nBig Qua Town, Naval Base\nCalabar, Cross River State, Nigeria",
    description:
      "Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!\n\nCity Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!\n\nBring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now! \n\n 3 Reasons to attend the event: \n\n 1. The FIRST Christmas concert of Mumbai!\n 2. A special Christmas Choir!\n 3. Special Dance performances and many more surprises! ",
    activities: [
      {
        date: "05",
        month: "MAR",
        performer: "Klint D’ Drunk",
        time: "8pm - 10pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "DJ Rexxie",
        time: "10pm - 11pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "Burna Boy",
        time: "11pm - 12am",
        description: "Burna Boy Concert",
      },
    ],
  },
  {
    eventSlug: "33-Export-Lager-Beer",
    img: "/images/events/cardImage2.png",
    month: "NOV",
    date: 25,
    day: "Wednesday, October 2",
    eventDate: "Saturday, 2 December 2025",
    eventName: "33 Export Lager Beer",
    eventVenue: "Sango otta, Ogun State",
    eventTime: "00:00 AM - 00:00 PM",
    address: "Calabar Stadium,  Cross River.",
    description: "This is the event description",
    activities: [
      {
        date: "05",
        month: "MAR",
        performer: "Klint D’ Drunk",
        time: "8pm - 10pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "DJ Rexxie",
        time: "10pm - 11pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "Burna Boy",
        time: "11pm - 12am",
        description: "Burna Boy Concert",
      },
    ],
  },
  {
    eventSlug: "lagos-summit-3.0",
    img: "/images/events/people.jpg",
    month: "OCT",
    date: 22,
    day: "Wednesday, October 2",
    eventDate: "Saturday, 2 December 2025",
    eventName: "Lagos Summit 3.0",
    eventVenue: "Lekki, Lagos State",
    eventTime: "00:00 AM - 00:00 PM",
    address: "Lekki,  Lagos.",
    description: "This is the event description",
    activities: [
      {
        date: "05",
        month: "MAR",
        performer: "Klint D’ Drunk",
        time: "8pm - 10pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "DJ Rexxie",
        time: "10pm - 11pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "Burna Boy",
        time: "11pm - 12am",
        description: "Burna Boy Concert",
      },
    ],
  },
  {
    eventSlug: "lagos-freedom-fest",
    img: "/images/events/cardImage.png",
    month: "OCT",
    date: 25,
    day: "Tuesday, October 1",
    eventDate: "Saturday, 2 December 2025",
    eventName: "Lagos Freedom Fest",
    eventVenue: "Victoria Island, Lagos State",
    eventTime: "00:00 AM - 00:00 PM",
    address:
      "U.J. Esuene Stadium\nBig Qua Town, Naval Base\nCalabar, Cross River State, Nigeria",
    description:
      "Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!\n\nCity Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!\n\nBring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now! \n\n 3 Reasons to attend the event: \n\n 1. The FIRST Christmas concert of Mumbai!\n 2. A special Christmas Choir!\n 3. Special Dance performances and many more surprises! ",
    activities: [
      {
        date: "05",
        month: "MAR",
        performer: "Klint D’ Drunk",
        time: "8pm - 10pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "DJ Rexxie",
        time: "10pm - 11pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "Burna Boy",
        time: "11pm - 12am",
        description: "Burna Boy Concert",
      },
    ],
  },
  {
    eventSlug: "33-Export-Lager-Beer",
    img: "/images/events/cardImage2.png",
    month: "NOV",
    date: 25,
    day: "Wednesday, October 2",
    eventDate: "Saturday, 2 December 2025",
    eventName: "33 Export Lager Beer",
    eventVenue: "Sango otta, Ogun State",
    eventTime: "00:00 AM - 00:00 PM",
    address: "Calabar Stadium,  Cross River.",
    description: "This is the event description",
    activities: [
      {
        date: "05",
        month: "MAR",
        performer: "Klint D’ Drunk",
        time: "8pm - 10pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "DJ Rexxie",
        time: "10pm - 11pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "Burna Boy",
        time: "11pm - 12am",
        description: "Burna Boy Concert",
      },
    ],
  },
  {
    eventSlug: "lagos-summit-3.0",
    img: "/images/events/people.jpg",
    month: "OCT",
    date: 22,
    day: "Wednesday, October 2",
    eventDate: "Saturday, 2 December 2025",
    eventName: "Lagos Summit 3.0",
    eventVenue: "Lekki, Lagos State",
    eventTime: "00:00 AM - 00:00 PM",
    address: "Lekki,  Lagos.",
    description: "This is the event description",
    activities: [
      {
        date: "05",
        month: "MAR",
        performer: "Klint D’ Drunk",
        time: "8pm - 10pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "DJ Rexxie",
        time: "10pm - 11pm",
      },
      {
        date: "05",
        month: "MAR",
        performer: "Burna Boy",
        time: "11pm - 12am",
        description: "Burna Boy Concert",
      },
    ],
  },
];

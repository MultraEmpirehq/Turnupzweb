"use client";
import { NextPage } from "next";
import { useState } from "react";
import { Event, OverviewMetric, ChartDataPoint } from "@/types/index";
import { Sidebar } from "@/components/Dasboard/SideBar";
import { Header } from "@/components/Dasboard/Header";
import { WelcomeBanner } from "@/components/Dasboard/WelcomeBanner";
import { OverviewSection } from "@/components/Dasboard/OverViewSection";
import { EventsSection } from "@/components/Dasboard/EventsSection";
import { TicketSalesChart } from "@/components/Dasboard/TicketSalesChart";

// Import your images
import Image from "next/image";
import div from "@/assets/images/div.png";
import door from "@/assets/images/door.png";
import uniqueIcon from "@/assets/images/uniqueIcon.png";
import venueIcon from "@/assets/images/venueIcon.png";
import ticket from "@/assets/images/ticket.png";

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState<string>("Dashboard");

  const events: Event[] = Array(6)
    .fill({
      id: "1",
      name: "LAGOS FREEDOM FEST 2024",
      date: new Date("2024-10-01"),
      location: "Lagos, Nigeria",
    })
    .map((event, index) => ({ ...event, id: (index + 1).toString() }));
  const overviewMetrics: OverviewMetric[] = [
    { title: "Event Created", value: 72, icon: div },
    { title: "Venue Created", value: 64, icon: door },
    { title: "Total sold Tickets", value: 240, icon: uniqueIcon },
    { title: "Wallet Balance", value: "₦ 64,000", icon: venueIcon },
    { title: "Unique Responders", value: 120, icon: ticket },
  ];
  const chartData: ChartDataPoint[] = [
    { name: "Mon", sales: 45 },
    { name: "Tue", sales: 78 },
    { name: "Wed", sales: 52 },
    { name: "Thu", sales: 89 },
    { name: "Fri", sales: 67 },
    { name: "Sat", sales: 34 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className="flex-1 overflow-auto">
        <Header headerName="Dashboard" />
        <div className="p-8">
          <WelcomeBanner />
          <OverviewSection metrics={overviewMetrics} />
          <EventsSection events={events} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TicketSalesChart chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

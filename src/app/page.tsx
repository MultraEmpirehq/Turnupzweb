"use client";
import { NextPage } from "next";
import { useState } from "react";
import { Event, OverviewMetric } from "../types";
import turnupLogo from "@/assets/images/turnupLogo.png";
import undrawLogo from "@/assets/images/undrawLogo.png";
import div from "@/assets/images/div.png";
import door from "@/assets/images/door.png";
import uniqueIcon from "@/assets/images/uniqueIcon.png";
import venueIcon from "@/assets/images/venueIcon.png";
import ticket from "@/assets/images/ticket.png";

import {
  FiHome,
  FiPlusSquare,
  FiFileText,
  FiMessageSquare,
  FiBarChart2,
  FiCreditCard,
  FiPocket,
  FiSettings,
  FiLogOut,
  FiSearch,
  FiBell,
} from "react-icons/fi";

const Dashboard: NextPage = () => {
  const [activeNav, setActiveNav] = useState<string>("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: FiHome },
    { name: "Create", icon: FiPlusSquare },
    { name: "Manage Post", icon: FiFileText },
    { name: "Chat", icon: FiMessageSquare },
    { name: "Analysis", icon: FiBarChart2 },
    { name: "Wallet", icon: FiCreditCard },
    { name: "Ticket", icon: FiPocket },
    { name: "Settings", icon: FiSettings },
    { name: "Logout", icon: FiLogOut },
  ];

  const events: Event[] = [
    {
      id: "1",
      name: "LAGOS FREEDOM FEST 2024",
      date: new Date("2024-10-01"),
      location: "Lagos, Nigeria",
    },
    {
      id: "2",
      name: "LAGOS FREEDOM FEST 2024",
      date: new Date("2024-10-01"),
      location: "Lagos, Nigeria",
    },
    {
      id: "3",
      name: "LAGOS FREEDOM FEST 2024",
      date: new Date("2024-10-01"),
      location: "Lagos, Nigeria",
    },
    {
      id: "4",
      name: "LAGOS FREEDOM FEST 2024",
      date: new Date("2024-10-01"),
      location: "Lagos, Nigeria",
    },
    {
      id: "5",
      name: "LAGOS FREEDOM FEST 2024",
      date: new Date("2024-10-01"),
      location: "Lagos, Nigeria",
    },
    {
      id: "6",
      name: "LAGOS FREEDOM FEST 2024",
      date: new Date("2024-10-01"),
      location: "Lagos, Nigeria",
    },
  ];

  const overviewMetrics: OverviewMetric[] = [
    { title: "Event Created", value: 72, icon: div },
    { title: "Venue Created", value: 64, icon: door },
    { title: "Total sold Tickets", value: 240, icon: uniqueIcon },
    { title: "Wallet Balance", value: "₦ 64,000", icon: venueIcon },
    { title: "Unique Responders", value: 120, icon: ticket },
  ];

  const chartData = [
    { name: "Mon", sales: 45 },
    { name: "Tue", sales: 78 },
    { name: "Wed", sales: 52 },
    { name: "Thu", sales: 89 },
    { name: "Fri", sales: 67 },
    { name: "Sat", sales: 34 },
  ];

  const maxSales = Math.max(...chartData.map((d) => d.sales));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        {/* Logo */}
        <div className="p-6">
          <img src={turnupLogo.src} alt="Turnupz Logo" className="h-8" />
        </div>

        <nav className="px-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveNav(item.name)}
                    className={`w-full text-left flex items-center py-3 px-4 rounded-lg transition-colors ${
                      activeNav === item.name
                        ? "bg-[#024C6B] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent className="mr-3 h-5 w-5" />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1
              className="text-2xl font-semibold text-gray-900"
              style={{ color: "#024C6B" }}
            >
              Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <FiSearch className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <FiBell className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">J</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs" style={{ color: "#821952" }}>
                    Organizer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Welcome Banner */}
          <div
            className="from-teal-600 to-teal-700 rounded-2xl p-8 mb-8 relative overflow-hidden"
            style={{ backgroundColor: "#024C6B" }}
          >
            {/* Text */}
            <div className="relative z-10">
              <h2 className="text-white text-2xl font-bold mb-2">
                Hi, John Doe 👋
              </h2>
              <p className="text-teal-100">
                Ready to start creating with Turnupz?
              </p>
            </div>

            {/* Decorative Illustration */}
            <img
              src={undrawLogo.src}
              alt="Illustration"
              className="absolute right-51 bottom-0 w-35 h-auto object-contain"
            />
          </div>

          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {overviewMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                const colors = [
                  "bg-blue-50 border-blue-200 text-blue-600",
                  "bg-pink-50 border-pink-200 text-pink-600",
                  "bg-blue-50 border-blue-200 text-blue-600",
                  "bg-purple-50 border-purple-200 text-purple-600",
                  "bg-blue-50 border-blue-200 text-blue-600",
                ];
                return (
                  <div
                    key={index}
                    className={`${colors[index]} rounded-xl border p-4 flex items-center space-x-4`}
                  >
                    {/* Icon on the left */}
                    <div className="flex-shrink-0">
                      <img
                        src={metric.icon.src}
                        alt={metric.title}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    {/* Value + Title stacked */}
                    <div>
                      <p className="text-xl font-bold text-gray-900">
                        {metric.value}
                      </p>
                      <p className="text-sm text-gray-600">{metric.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl mb-6 p-6">
            {/* Events Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Events</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-teal-600 text-white rounded-lg text-sm">
                    Ongoing
                  </button>
                  <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    Upcoming
                  </button>
                  <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">
                    Past
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((event, index) => (
                  <div key={event.id} className="relative">
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      {/* Background gradient */}
                      <div
                        className={`absolute inset-0 ${
                          index % 3 === 0
                            ? "bg-gradient-to-br from-orange-400 to-red-500"
                            : index % 3 === 1
                            ? "bg-gradient-to-br from-gray-800 to-gray-900"
                            : "bg-gradient-to-br from-purple-500 to-pink-500"
                        }`}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      </div>

                      {/* Event info */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <h4 className="text-white font-semibold text-sm">
                          {event.name}
                        </h4>
                        <p className="text-white text-xs opacity-90">
                          Tuesday, October 1
                        </p>
                      </div>

                      {/* Options button */}
                      <button className="absolute top-2 right-2 p-1 text-white hover:bg-white hover:bg-opacity-20 rounded">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Ticket Sales Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-lg font-semibold text-gray-900"
                  style={{ color: "#024C6B" }}
                >
                  Ticket Sales
                </h3>
              </div>
              {/* Chart */}
              <div className="space-y-4">
                {/* Bar Chart */}
                <div className="flex items-end justify-between h-48 px-6">
                  {chartData.map((item, index) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div
                        className="w-10 "
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#024C6B" : "#ED2E95", // pink-500 hex
                          height: `${(item.sales / maxSales) * 130}px`,
                          minHeight: "20px",
                        }}
                      ></div>
                      <span className="text-xs text-gray-500">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

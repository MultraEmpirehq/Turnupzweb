"use client";

import CreateScreen from "@/components/CreateScreen/CreateScreen";
import turnupLogo from "@/assets/images/turnupLogo.png";
import { Header } from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";
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
} from "react-icons/fi";
// import Dashboard from "../page";

type ScreenComponent = React.ComponentType<any>;

const screens: Record<string, ScreenComponent> = {
  Dashboard: () => <h1>Dashboard</h1>,
  Create: () => <CreateScreen />,
  ManagePost: () => <h1>Manage Post</h1>,
  Chat: () => <h1>Chat</h1>,
  Analysis: () => <h1>Analysis</h1>,
  Wallet: () => <h1>Wallet</h1>,
  Ticket: () => <h1>Ticket</h1>,
  Settings: () => <h1>Settings</h1>,
};

const navItems: { key: keyof typeof screens; label: string; icon: any }[] = [
  { key: "Dashboard", label: "Dashboard", icon: FiHome },
  { key: "Create", label: "Create", icon: FiPlusSquare },
  { key: "ManagePost", label: "Manage Post", icon: FiFileText },
  { key: "Chat", label: "Chat", icon: FiMessageSquare },
  { key: "Analysis", label: "Analysis", icon: FiBarChart2 },
  { key: "Wallet", label: "Wallet", icon: FiCreditCard },
  { key: "Ticket", label: "Ticket", icon: FiPocket },
  { key: "Settings", label: "Settings", icon: FiSettings },
  //   { key: "Logout", label: "Logout", icon: FiLogOut },
];

const CreatePage = () => {
  // active state
  const [active, setActive] = React.useState<keyof typeof screens>("Dashboard");

  // type-safe CurrentScreen
  const CurrentScreen: ScreenComponent = screens[active];

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="w-64 bg-white h-screen flex flex-col">
        <div className="w-full flex px-8 my-6">
          <div className="w-[95px] h-[30px] relative ">
            <Image
              src={turnupLogo.src}
              fill
              alt="Logo"
              className="object cover absolute"
            />
          </div>
        </div>

        {/* Menus */}
        <div className="px-4">
          <ul className="space-y-1">
            {navItems.map(({ key, label, icon }) => {
              const IconComponent = icon;
              const isActive = active === key;
              return (
                <li key={key}>
                  <button
                    onClick={() => setActive(key)}
                    className={`border border-[#F6F6F6] w-full text-left flex items-center h-[60px] rounded-tr-[16px] rounded-br-[16px] px-4 transition-colors ${
                      active === key
                        ? "bg-[#024C6B] text-white"
                        : "text-[#7D7D7D] cursor-pointer"
                    }`}
                  >
                    <IconComponent className="mr-3 h-5 w-5" />
                    <p>{label}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Logout Button */}
        <div className=" flex items-center justify-center mt-[60px]">
          <button className="bg-[#03648C] w-[191px] h-[56px] text-white rounded-lg cursor-pointer">
            Logout
          </button>
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 bg-[gray-100]">
        <CurrentScreen />
      </div>
    </div>
  );
};

export default CreatePage;

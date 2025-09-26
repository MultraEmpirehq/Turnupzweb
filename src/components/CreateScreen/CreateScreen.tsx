"use client";
import React, { useState } from "react";
import { WelcomeBanner } from "../Dasboard/WelcomeBanner";
import { Header } from "@/components/Dasboard/Header";
import FormStep from "./FormStep";
import { Sidebar } from "@/components/Dasboard/SideBar";

const CreateScreen = () => {
  const [activeNav, setActiveNav] = useState<string>("Create");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className="flex-1 overflow-auto">
        <Header headerName="Create" />
        <div className="p-8">
          <WelcomeBanner />
          <FormStep />
        </div>
      </div>
    </div>
  );
};

export default CreateScreen;

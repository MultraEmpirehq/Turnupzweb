import React from "react";
import { WelcomeBanner } from "../Dasboard/WelcomeBanner";
import { Header } from "../Dasboard/Header";
import FormStep from "./FormStep";

const CreateScreen = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <Header headerName="Create" />
      <div className="p-8 flex flex-col">
        <WelcomeBanner />
        <FormStep />
      </div>
    </div>
  );
};

export default CreateScreen;

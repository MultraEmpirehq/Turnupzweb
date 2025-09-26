"use client";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import UploadCover from "./UploadCover";
import UploadMedia from "./UploadMedia";
import PaymentInfo from "./PaymentInfo";

const steps = [
  "Basic Info",
  "Upload Cover",
  "Ticket Info",
  "Payment Info",
  "Upload Media",
];

const FormStep = () => {
  const [activeStep, setActiveStep] = useState(0);

  // const handleNext = () => {
  //   if (activeStep < steps.length - 1) {
  //     setActiveStep(activeStep + 1);
  //   } else {
  //     alert("✅ Form submitted!");
  //     // TODO: submit to API here
  //   }
  // };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Step Tabs */}
      <div className="w-full flex space-x-[38px] mb-6 justify-center">
        {steps.map((step, i) => (
          <span
            key={step}
            onClick={() => setActiveStep(i)}
            className={`pb-2 text-sm font-bold cursor-pointer ${
              activeStep === i
                ? "text-sky-900 border-b-2 border-sky-900"
                : "text-gray-400"
            }`}
          >
            {step}
          </span>
        ))}
      </div>

      {/* Form Body */}
      <div className="w-full p-6 mb-6">
        {activeStep === 0 && <BasicInfo />}

        {activeStep === 1 && <UploadCover />}
        {activeStep === 2 && <p>🎟️ Ticket Info form</p>}
        {activeStep === 3 && <PaymentInfo />}
        {activeStep === 4 && <UploadMedia />}
      </div>

      {/* Footer Button */}
      <button
        // onClick={handleNext}
        className="bg-sky-900 text-white px-6 py-3 rounded-md font-semibold"
      >
        {activeStep === steps.length - 1 ? "Publish Event" : "Save & Continue"}
      </button>
    </div>
  );
};

export default FormStep;

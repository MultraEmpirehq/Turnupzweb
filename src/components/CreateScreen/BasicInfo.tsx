import React from "react";

const BasicInfo = () => {
  return (
    <div className="w-full flex justify-center gap-16">
      <div className="flex flex-col">
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="eventName"
            className="text-[14px] text-primary-800 font-bold"
          >
            Event Name
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="eventTime"
            className="text-[14px] text-primary-800 font-bold"
          >
            Event Time
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="specialGuest"
            className="text-[14px] text-primary-800 font-bold"
          >
            Add Special Guest
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="additionalInfo"
            className="text-[14px] text-primary-800 font-bold"
          >
            Additional Information
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="eventDate"
            className="text-[14px] text-primary-800 font-bold"
          >
            Event Date
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="eventLocation"
            className="text-[14px] text-primary-800 font-bold"
          >
            Event Location
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="aboutEvent"
            className="text-[14px] text-primary-800 font-bold"
          >
            About Event
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
        <div className="flex flex-col gap-[8px] mb-8">
          <label
            htmlFor="activityInfo"
            className="text-[14px] text-primary-800 font-bold"
          >
            Activity Information
          </label>
          <input className="border border-neutral-white-50 h-[48px] w-[478px] rounded-md bg-neutral-white" />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;

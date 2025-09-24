import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full h-[178px] bg-linear-65 from-[#05B5FF] to-[#FF239A] px-48 flex items-center justify-between">
      <div className="text-[#2D2C3C]">
        <p className="text-[27px] font-medium mb-4">
          Subscribe to our Newsletter
        </p>
        <p className="text-[18px] font-normal">
          Receive our weekly newsletter & updates with new events from <br />{" "}
          your favourite organizers & venues.
        </p>
      </div>

      {/* Input */}
      <div className="flex h-[60px]">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-[391px] rounded-l-lg px-8 border-[0.75px] bg-white border-[#2B293D]"
        />
        <button
          type="button"
          className="rounded-r-lg bg-[#2B293D] w-[138px] text-white"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;

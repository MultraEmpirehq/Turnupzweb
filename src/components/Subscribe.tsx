import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full h-auto md:h-[178px] bg-linear-65 from-[#05B5FF] to-[#FF239A] p-2 md:px-48 flex flex-col md:flex-row items-center justify-start md:justify-between">
      <div className="w-full text-dark-bluish-gray flex flex-col">
        <p className="text-primary-base md:text-subscribe-header font-medium mb-2 md:mb-4 text-center md:text-left">
          Subscribe to our Newsletter
        </p>
        <p className="text-[12px] md:text-primary-base font-normal mb-4 text-center md:text-left">
          Receive our weekly newsletter & updates with new events from <br />{" "}
          your favourite organizers & venues.
        </p>
      </div>

      {/* Input */}
      <div className="w-full justify-end flex h-[40px] md:h-[60px]">
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

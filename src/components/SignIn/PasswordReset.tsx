"use client";

import Banner from "@/components/Banner";
import React, { useState } from "react";

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center items-center gap-20">
      <Banner />

      <form className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center gap-[40px] w-[446px]">
          {/* Header */}
          <p className="font-bold text-[34px] text-[#03648C]">Password Reset</p>

          {/* Input */}
          <div className="w-full flex flex-col gap-8">
            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-bold text-[17px] text-[#03648C]"
              >
                New Password
              </label>
              <div className="w-full  flex justify-between rounded-[8px] items-center bg-[#FCFCFC] border border-[#ECECEC] pr-[8px]">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="******************"
                  className=" rounded-[8px] h-[48px] px-4"
                />
                {/* {showPassword ? (
                              <VisibilityOutlinedIcon
                                className="cursor-pointer text-[#03648C]"
                                onClick={() => setShowPassword(false)}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                className="cursor-pointer text-[#03648C]"
                                onClick={() => setShowPassword(true)}
                              />
                            )} */}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-bold text-[17px] text-[#03648C]"
              >
                Confirm Password
              </label>
              <div className="w-full  flex justify-between rounded-[8px] items-center bg-[#FCFCFC] border border-[#ECECEC] pr-[8px]">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="******************"
                  className=" rounded-[8px] h-[48px] px-4"
                />
                {/* {showPassword ? (
                              <VisibilityOutlinedIcon
                                className="cursor-pointer text-[#03648C]"
                                onClick={() => setShowPassword(false)}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                className="cursor-pointer text-[#03648C]"
                                onClick={() => setShowPassword(true)}
                              />
                            )} */}
              </div>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="w-full text-white py-4 rounded-[16px] bg-linear-65 from-[#05B5FF] to-[#FF239A] shadow-lg cursor-pointer mt-8"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;

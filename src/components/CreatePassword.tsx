"use client";

import tLogo from "@/assets/images/t-logo.png";
import React, { useState } from "react";
import Banner from "./Banner";
import Image from "next/image";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex justify-center items-center gap-20">
        <Banner />

        <form className="flex-1 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-[40px] w-[446px]">
            {/* Header */}
            <div className=" w-full flex flex-col gap-8 items-center">
              <div className="w-[100] h-[100] relative">
                <Image
                  src={tLogo}
                  alt="short-logo"
                  fill
                  className="absolute object-contain"
                />
              </div>
              <div className="flex">
                <p className="font-bold text-[38px] text-[#03648C]">
                  Create Password
                </p>
              </div>
            </div>

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
                    className=" rounded-[8px] h-[48px] px-4 w-full"
                  />
                  {showPassword ? (
                    <VisibilityOutlinedIcon
                      className="cursor-pointer text-[#03648C]"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <VisibilityOffOutlinedIcon
                      className="cursor-pointer text-[#03648C]"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
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
                    className=" rounded-[8px] h-[48px] px-4 w-full"
                  />
                  {showPassword ? (
                    <VisibilityOutlinedIcon
                      className="cursor-pointer text-[#03648C]"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <VisibilityOffOutlinedIcon
                      className="cursor-pointer text-[#03648C]"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
              {/* Button */}
              <button
                type="submit"
                className="w-full text-white py-4 rounded-[16px] bg-[#024C6B] shadow-lg cursor-pointer mt-8"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;

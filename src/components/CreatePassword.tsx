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
          <div className="flex flex-col items-center justify-center gap-[40px] w-[377px] md:w-[446px] p-4">
            {/* Header */}
            <div className=" w-full flex flex-col gap-8 items-center">
              <div className="hidden md:block w-[100] h-[100] relative">
                <Image
                  src={tLogo}
                  alt="short-logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex">
                <p className="font-bold text-[28px] md:text-[38px] text-primary-800">
                  Create Password
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="w-full flex flex-col gap-8">
              {/* New Password */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="newPassword"
                  className="font-bold text-[14px] md:text-[17px] text-primary-800"
                >
                  New Password
                </label>
                <div className="inputWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="new-password"
                    placeholder="******************"
                    className="rounded-md h-[48px] px-4 w-full outline-none"
                  />
                  {showPassword ? (
                    <VisibilityOutlinedIcon
                      className="cursor-pointer text-primary-800"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <VisibilityOffOutlinedIcon
                      className="cursor-pointer text-primary-800"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="confirmPassword"
                  className="font-bold text-[14px] md:text-[17px] text-primary-800"
                >
                  Confirm Password
                </label>
                <div className="inputWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirm-password"
                    placeholder="******************"
                    className=" rounded-md h-[48px] px-4 w-full outline-none"
                  />
                  {showPassword ? (
                    <VisibilityOutlinedIcon
                      className="cursor-pointer text-primary-800"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <VisibilityOffOutlinedIcon
                      className="cursor-pointer text-primary-800"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
              {/* Button */}
              <button
                type="submit"
                className="w-full text-white py-4 rounded-xl bg-[#024C6B] shadow-lg cursor-pointer mt-8"
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

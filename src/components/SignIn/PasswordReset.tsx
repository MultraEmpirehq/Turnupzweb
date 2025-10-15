"use client";

import Banner from "@/components/Banner";
import React, { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex justify-center items-center gap-20">
      <Banner />

      <form className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center gap-[40px] w-full md:w-[446px]">
          {/* Header */}
          <p className="font-bold text-[34px] text-primary-800">
            Password Reset
          </p>

          {/* Input */}
          <div className="w-full flex flex-col gap-8">
            {/* New Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-bold text-[17px] text-primary-800"
              >
                New Password
              </label>
              <div className="primaryInputWrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="primaryInput"
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
                htmlFor="password"
                className="font-bold text-[17px] text-primary-800"
              >
                Confirm Password
              </label>
              <div className="primaryInputWrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="primaryInput"
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
            <button type="submit" className="gradientBtn">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;

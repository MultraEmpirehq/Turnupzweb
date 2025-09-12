"use client";

import React, { useState } from "react";
import Link from "next/link";
import Banner from "../Banner";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const SignIn = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex justify-center items-center gap-20">
        <Banner />

        <form action="" className="flex-1 flex justify-center">
          <div className="flex flex-col w-[460px]">
            <p className="text-[#024C6B] font-bold text-[34px] mb-[25px]">
              Sign In
            </p>
            {/* Email */}
            <div className="w-full items-center gap-[8px] mb-[25px]">
              <label
                htmlFor="email"
                className="font-bold text-sm text-[#5F5F5F]"
              >
                Email
              </label>
              <div className="w-full flex justify-between rounded-[8px] items-center bg-[#FCFCFC] border border-[#ECECEC] pr-[8px]">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full rounded-[8px] h-[48px] px-4"
                />
                {inputValue.includes("@") && (
                  <DoneOutlinedIcon
                    style={{
                      fontSize: "14px",
                      color: "#5F5F5F",
                    }}
                  />
                )}
              </div>
            </div>
            {/* Password */}
            <div className="flex flex-col gap-[8px] mb-[8px]">
              <div className="w-full items-center gap-[8px]">
                <label
                  htmlFor="password"
                  className="font-bold text-sm text-[#5F5F5F]"
                >
                  Password
                </label>
                <div className="w-full flex justify-between rounded-[8px] items-center bg-[#FCFCFC] border border-[#ECECEC] pr-[8px] mb-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full rounded-[8px] h-[48px] px-4"
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
              <p className="text-[#03648C] text-[14px] font-normal hidden">
                Successful!
              </p>
              <div className="flex justify-between hidden">
                <p className="text-[#F15858] text-[14px] font-normal">
                  Password is incorrect
                </p>
                <Link
                  href="/forgot-password"
                  className="text-[#03648C] text-[14px] font-normal"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Link
              href="/forgot-password"
              className="text-[#03648C] text-[17px] font-normal text-right"
            >
              Forgot Password?
            </Link>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-[69px] rounded-[19px] cursor-pointer border border-[#CFCFCF] text-[19px] font-medium text-[#FDEAF4] bg-linear-65 from-[#FF239A] to-[#05B5FF] shadow-md mt-[39px]"
            >
              Sign In
            </button>

            <div className="flex flex-col gap-[24px] items-center w-full mt-[20px]">
              <p className="text-base font-bold text-[#5F5F5F]">
                Don’t have an account ?
              </p>

              <Link
                href="/signup"
                className="w-full h-[56px] rounded-[19px] border border-[#05B5FF] text-sm font-medium text-[#05B5FF] shadow-md flex justify-center items-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

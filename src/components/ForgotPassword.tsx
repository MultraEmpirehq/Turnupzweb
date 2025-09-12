"use client";

import React, { useState } from "react";
import Link from "next/link";
import Banner from "./Banner";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const ForgotPassword = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex justify-center items-center gap-20">
        <Banner />

        <form action="" className="flex-1 flex justify-center">
          <div className="flex flex-col gap-[44px] w-[464px]">
            <p className="text-[34px] font-bold text-[#024C6B]">Sign In</p>

            <div className="flex flex-col gap-[8px] items-center">
              <p className="font-bold text-[18px] text-[#5F5F5F]">
                Forgot your password?
              </p>
              <p className="font-normal text-[14px] text-[#5F5F5F] align-center">
                Confirm your email and we will send the instructions.
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="grid w-full max-w-sm items-center gap-[8px]">
                <label
                  htmlFor="email"
                  className="font-bold text-sm text-[#5F5F5F]"
                >
                  Email
                </label>
                <div className="w-full  flex justify-between rounded-[8px] items-center bg-[#FCFCFC] border border-[#ECECEC] pr-[8px]">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className=" w-full rounded-[8px] h-[48px] px-4"
                  />
                  {inputValue.includes("@") && (
                    <DoneOutlinedIcon
                      style={{
                        fontSize: "14px",
                        color: "#5F5F5F",
                        // display: "none",
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-between hidden">
                <p className="text-[#F15858] text-[14px] font-normal">
                  This email does not exist
                </p>
                <Link
                  href="/signup"
                  className="text-[#03648C] text-[14px] font-normal"
                >
                  SignUp
                </Link>
              </div>
            </div>

            <button className="w-full h-[56px] rounded-[19px] cursor-pointer border border-[#CFCFCF] text-sm font-medium text-[#FDEAF4] bg-linear-65 from-[#05B5FF] to-[#FF239A] shadow-md">
              Password reset link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

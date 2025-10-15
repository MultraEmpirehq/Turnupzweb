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

        <form action="" className="w-full flex-1 flex justify-center">
          <div className="flex flex-col gap-[44px] w-[464px]">
            <p className="text-[34px] font-bold text-btn-color">Sign In</p>

            <div className="flex flex-col gap-[8px] items-center">
              <p className="font-bold text-[18px] text-dark-neutral-text">
                Forgot your password?
              </p>
              <p className="font-normal text-[14px] text-dark-neutral-text align-center">
                Confirm your email and we will send the instructions.
              </p>
            </div>

            <div className="w-full flex flex-col gap-[8px]">
              <div className="w-full items-center gap-[8px]">
                <label
                  htmlFor="email"
                  className="font-bold text-sm text-dark-neutral-text"
                >
                  Email
                </label>
                <div className="primaryInputWrapper">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="primaryInput"
                  />
                  {inputValue.includes("@") && (
                    <DoneOutlinedIcon
                      style={{
                        fontSize: "18px",
                        color: "#5F5F5F",
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="w-full hidden">
                <div className="flex justify-between">
                  <p className="text-[#F15858] text-[14px] font-normal">
                    This email does not exist
                  </p>
                  <Link
                    href="/signup"
                    className="text-primary-800 text-[14px] font-normal"
                  >
                    SignUp
                  </Link>
                </div>
              </div>
            </div>

            <button className="gradientBtn shadow-md">
              Password reset link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

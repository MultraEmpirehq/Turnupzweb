"use client";

import React, { useState } from "react";
import Link from "next/link";
import Banner from "../Banner";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useRouter } from "next/navigation"; // 👈 import router

const SignIn = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter(); // 👈 hook for navigation

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    // 👉 Here you would normally validate/sign in via API
    // For now just redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex justify-center items-center gap-20">
        <Banner />

        <form onSubmit={handleSignIn} className="flex-1 flex justify-center">
          <div className="flex flex-col w-[379px] md:w-[460px] p-4">
            <p className="text-btn-color font-bold text-[34px] mb-[25px]">
              Sign In
            </p>

            {/* Email */}
            <div className="w-full items-center gap-[8px] mb-[25px]">
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

            {/* Password */}
            <div className="flex flex-col gap-[8px] mb-[8px]">
              <div className="w-full items-center gap-[8px]">
                <label
                  htmlFor="password"
                  className="font-bold text-sm text-dark-neutral-text"
                >
                  Password
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
            </div>

            <Link
              href="/forgot-password"
              className="text-primary-800 text-[17px] font-normal text-right"
            >
              Forgot Password?
            </Link>

            {/* Button */}
            <button type="submit" className="gradientBtn">
              Sign In
            </button>

            <div className="flex flex-col gap-6 items-center w-full mt-5">
              <p className="text-base font-bold text-dark-neutral-text">
                Don’t have an account ?
              </p>

              <Link
                href="/signup"
                className="w-full h-14 rounded-xl md:rounded-2xl border border-primary text-sm font-medium text-primary shadow-md flex justify-center items-center"
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

"use client";

import Image from "next/image";
import React, { useState } from "react";
import turnups from "@/assets/images/Turnupz.png";
import Link from "next/link";
import Banner from "../Banner";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const SignUpPage = () => {
  const [email, setEmail] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //   await signIn("email", { email, redirect: false });
    // After this, NextAuth will redirect user to /auth/verify

    setShowSuccess(true);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full flex justify-center items-center gap-20">
        {/* Banner */}
        <Banner />

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1">
          <div className="flex flex-col items-center justify-center gap-[40px]">
            {/* Header */}
            <div className=" w-[248px] flex flex-col gap-[8px] items-center">
              <div className="flex">
                <p className="font-bold text-[38px] text-[#424242]">
                  Welcome 🎉
                </p>
              </div>
              <p className="text-[19px] text-[#5F5F5F] font-medium text-center">
                Enter your email to sign up if you’re new here.
              </p>
            </div>
            {/* Input/Button */}
            <div className="flex flex-col gap-[30px] w-[513px] ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-4 rounded-[12px] bg-[#E3E3E3]"
                placeholder="name@email.com"
              />
              <button
                type="submit"
                className="w-full text-white py-4 rounded-[16px] bg-[#024C6B] shadow-lg cursor-pointer"
              >
                Continue
              </button>
            </div>
            {/* Divider */}
            <div className="flex gap-2">
              <span>--------------------------------------------</span>
              <p>Or</p>
              <span>--------------------------------------------</span>
            </div>
            {/* Other Options */}
            <div className="flex flex-col">
              <button className="w-[513px] h-[62px] bg-[#FCFCFC] border border-[#CFCFCF] rounded-[12px] cursor-pointer text-[#7D7D7D] font-medium mb-[30px]">
                Continue with apple
              </button>
              <button className="w-[513px] h-[62px] bg-[#FCFCFC] border border-[#CFCFCF] rounded-[12px] cursor-pointer text-[#7D7D7D] font-medium">
                Continue with google
              </button>
              <Link
                href="/sign-in"
                className="text-right mt-2 text-[14px] font-medium text-blue-900"
              >
                Already a member? <span className="text-red-800">Login</span>
              </Link>
            </div>
          </div>
        </form>

        {/* ✅ Success Modal Overlay */}
        {showSuccess && (
          <div className="fixed inset-0 w-full flex items-center justify-center">
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center w-full px-20 py-10">
                <div className="w-full h-[886px] flex items-center justify-center bg-white/70 rounded-[25px]">
                  <div className="flex flex-col justify-center items-center bg-white p-8 rounded-[25px] shadow-lg text-center w-[558px] h-[564px]">
                    <MarkEmailReadIcon
                      style={{
                        fontSize: "130px",
                        color: "#024C6B",
                        marginBottom: "20px",
                      }}
                    />
                    <p className="text-[24px] font-semibold text-[#424242] mb-2">
                      We have sent a login link to <br />
                      name@email.com
                    </p>
                    <p className="text-[#424242] font-normal mb-8 leading-[24px] text-[18px] mt-[30px]">
                      Please check your email. If not seen,
                      <br /> be sure to check your spam folder. <br /> Need
                      help?{" "}
                      <Link href="/" className="text-[#03648C]">
                        Contact support.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;

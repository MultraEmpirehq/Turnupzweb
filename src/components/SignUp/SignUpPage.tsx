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
        <form onSubmit={handleSubmit} className="flex-1 flex justify-center">
          <div className="w-[320px] md:w-[513px] flex flex-col items-center justify-center gap-[40px]">
            {/* Header */}
            <div className="w-[155px] md:w-[248px] flex flex-col gap-[8px] items-center">
              <div className="flex">
                <p className="font-bold text-[24px] md:text-[38px] text-light-black">
                  Welcome 🎉
                </p>
              </div>
              <p className="text-[12px] md:text-[19px] text-dark-neutral-text font-medium text-center">
                Enter your email to sign up if you’re new here.
              </p>
            </div>
            {/* Input/Button */}
            <div className="flex flex-col gap-[18px] md:gap-[30px] w-[320px] md:w-[513px] ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 md:p-4 rounded-md md:rounded-[12px] bg-neutral-white-500 text-neutral-white-700 outline-none"
                placeholder="name@email.com"
              />
              <button
                type="submit"
                className="w-full text-white py-2 md:py-4 rounded-md md:rounded-xl bg-btn-color shadow-lg cursor-pointer"
              >
                Continue
              </button>
            </div>
            {/* Divider */}
            <div className="w-full flex gap-2 justify-center">
              <span className="bg-light-neutral-text h-[1px] w-60 my-auto"></span>
              <p className="text-light-neutral-text mx-2">Or</p>
              <span className="bg-light-neutral-text h-[1px] w-60 my-auto"></span>
            </div>
            {/* Other Options */}
            <div className="w-full flex flex-col">
              <button className="signUpOpt mb-[25px] md:mb-[40px] flex justify-center items-center gap-2">
                <Image
                  src="/applelogo.svg"
                  alt="apple"
                  width={24}
                  height={24}
                />
                Continue with apple
              </button>
              <button className="signUpOpt flex justify-center items-center gap-2">
                <Image src="/google.svg" alt="apple" width={24} height={24} />
                Continue with google
              </button>
              <div className="text-right mt-2 text-[14px] font-medium text-btn-color">
                <p>
                  Already a member? <Link href="/sign-in">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </form>

        {/* ✅ Success Modal Overlay */}
        {showSuccess && (
          <div className="fixed inset-0 w-full flex items-center justify-center">
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center w-full px-2 md:px-20 py-10">
                <div className="w-full h-[886px] flex items-center justify-center bg-white/70 rounded-[25px]">
                  <div className="flex flex-col justify-center items-center bg-white p-2 md:p-8 rounded-[25px] shadow-lg text-center w-[558px] h-full md:h-[564px]">
                    <MarkEmailReadIcon
                      style={{
                        fontSize: "130px",
                        color: "#024C6B",
                        marginBottom: "20px",
                      }}
                    />
                    <p className="text-[24px] font-semibold text-light-black mb-2">
                      We have sent a login link to <br />
                      name@email.com
                    </p>
                    <p className="text-light-black font-normal mb-8 leading-[24px] text-[18px] mt-[30px]">
                      Please check your email. If not seen,
                      <br /> be sure to check your spam folder. <br /> Need
                      help?{" "}
                      <Link href="/" className="text-primary-800">
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

"use client";

import React from "react";
import Header from "./Header";
import Image from "next/image";
import contactImage from "@/assets/images/contact-image.png";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />

      <div className="w-full flex h-[354px] items-center bg-linear-to-r from-[#05B5FF] to-[#FF239A] opacity-[70%]">
        <div className="flex flex-1 bg-red-900 h-full">
          <div className="w-full h-full relative">
            <Image
              src={contactImage}
              alt="contact-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="font-extrabold text-[48px] text-[#011334] flex-1 flex justify-center">
          Contact Us
        </div>
      </div>

      <div className="w-full flex">
        <div className="flex flex-1 flex-col pl-20 pt-10">
          <div className="flex flex-col gap-8 text-[#011334]">
            <div className="flex flex-col gap-[20px]">
              <p className="font-bold text-[36px]">Let&apos;s talk with us</p>
              <p className="font-normal text-[16px]">
                Questions, comments, or suggestions? Simply <br /> fill in the
                form and we’ll be in touch shortly.
              </p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                <p className="font-bold text-[18px]">
                  1055 Arthur ave Elk Groot, 67. <br /> New Palmas South
                  Carolina.
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <Image src="/phone.svg" alt="location" width={24} height={24} />
                <p className="font-bold text-[18px]">+1 234 678 9108 99</p>
              </div>
              <div className="flex gap-[10px] items-center">
                <Image src="/email.svg" alt="location" width={24} height={24} />
                <p className="font-bold text-[18px]">Contact@turnupz.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 pl-20 py-10">
          <form action="" className="w-[460px]">
            <div className="w-full items-center gap-[8px] mb-[25px]">
              <label
                htmlFor="email"
                className="font-bold text-sm text-[#5F5F5F]"
              >
                Name
              </label>
              <div className="w-full flex justify-between rounded-[8px] items-center bg-[#FCFCFC] border border-[#ECECEC] pr-[8px]">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-[8px] h-[48px] px-4"
                />
              </div>
            </div>

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
                  placeholder="Enter your email"
                  className="w-full rounded-[8px] h-[48px] px-4"
                />
              </div>
            </div>

            <div className="w-full items-center gap-[8px] mb-[25px]">
              <label
                htmlFor="email"
                className="font-bold text-sm text-[#5F5F5F]"
              >
                Message
              </label>
              <div className="w-full flex justify-between rounded-[8px] items-center bg-[#FCFCFC] border border-[#ECECEC] pr-[8px]">
                <textarea className="w-full rounded-[8px] h-[48px] px-4"></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-[460px] h-[69px] rounded-[19px] cursor-pointer border border-[#CFCFCF] text-[19px] font-medium text-[#FDEAF4] bg-linear-to-r from-[#05B5FF] to-[#FF239A] shadow-md mt-[39px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

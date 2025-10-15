"use client";

import React, { useState, DragEvent, ChangeEvent } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Image from "next/image";

const VendorInfo = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    const selectedFile = files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleFileChange(e.dataTransfer.files);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowSuccess(true);
  };

  return (
    <div className="flex w-full md:w-[1062px] h-auto justify-center items-center shadow-lg md:rounded-[25px] py-8 px-4 md:px-24 relative bg-white">
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <p className="font-normal text-[24px] md:text-[57px] text-primary-800">
            Let’s sign you up
          </p>
          <p className="font-medium text-[14px] md:text-[16px] text-primary-800">
            Enter your details to get going
          </p>

          <div className="w-full flex justify-between flex-col md:flex-row gap-2 md:gap-4">
            {/* Left Side */}
            <div className="flex flex-col py-2 gap-1 md:gap-2">
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Vendor’s First name
                </label>
                <input
                  type="text"
                  placeholder="Enter your First name"
                  className="signUpInput"
                  required
                />
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Vendor’s Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="signUpInput"
                  required
                />
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="signUpInput"
                  required
                />
              </div>
              {/* <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Upload a Selfie Holding the ID
                </label>
                <div
                  className={`flex flex-col items-center justify-center w-[386px] border border-neutral-white-50 bg-neutral-white rounded-md h-[154px] p-4 cursor-pointer transition ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="hidden w-full"
                    id="upload"
                    // required
                  />
                  <label
                    htmlFor="upload"
                    className="flex flex-col items-center cursor-pointer w-full h-full relative"
                  >
                    {preview ? (
                      <div className="w-full h-full relative">
                        <Image
                          src={preview}
                          alt="Preview"
                          fill
                          className="absolute object-contain mb-2 "
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-btn-color font-semibold text-[18px]">
                        <PermMediaIcon
                          style={{
                            fontSize: "40px",
                            marginBottom: "20px",
                            color: "#7D7D7D",
                          }}
                        />
                        <span>Click to upload or drag and drop</span>
                        <span className="text-headers text-input-text text-[16px] font-normal">
                          PDF, JPEG, PNG less than 1MB
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              </div> */}
            </div>

            {/* Right Side */}
            <div className="flex flex-col py-2 gap-1 md:gap-2">
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Johndoe@yahoo.com"
                  className="signUpInput"
                  required
                />
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Country
                </label>
                <select className="signUpInput" required>
                  <option value="">Select</option>
                  <option value="ng">Nigeria</option>
                  <option value="us">USA</option>
                </select>
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Select Valid government -issued ID for Upload
                </label>
                <select className="signUpInput" required>
                  <option value="">Select Option</option>
                  <option value="passport">Passport</option>
                  <option value="driver">Driver’s License</option>
                </select>
              </div>
              {/* <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-primary-800 text-[14px] font-bold"
                >
                  Upload a Selfie Holding the ID
                </label>
                <div
                  className={`flex flex-col items-center justify-center w-[386px] border border-neutral-white-50 bg-neutral-white rounded-md h-[154px] p-4 cursor-pointer transition ${
                    dragActive
                      ? "border-[#03648C] bg-blue-50"
                      : "border-neutral-white-50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="hidden w-full"
                    id="upload"
                    // required
                  />
                  <label
                    htmlFor="upload"
                    className="flex flex-col items-center cursor-pointer w-full h-full relative"
                  >
                    {preview ? (
                      <div className="w-full h-full relative">
                        <Image
                          src={preview}
                          alt="Preview"
                          fill
                          className="absolute object-contain mb-2 "
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-btn-color font-semibold text-[18px]">
                        <PermMediaIcon
                          style={{
                            fontSize: "40px",
                            marginBottom: "20px",
                            color: "#7D7D7D",
                          }}
                        />
                        <span>Click to upload or drag and drop</span>
                        <span className="text-headers text-input-text text-[16px] font-normal">
                          PDF, JPEG, PNG less than 1MB
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              </div> */}
            </div>
          </div>

          <button
            type="submit"
            className="shadow-md bg-btn-color text-white text-[16px] font-normal w-[373px] h-[56px] rounded-xl mt-4 md:mt-8 cursor-pointer"
          >
            Finish
          </button>
        </div>
      </form>

      {/* ✅ Success Modal Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 w-full flex items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center w-full px-20 py-10">
              <div className="w-[1062px] h-[886px] flex items-center justify-center bg-white/80 rounded-[25px]">
                <div className="flex flex-col justify-center items-center bg-white p-8 rounded-[25px] shadow-lg text-center w-[621px] h-[414px]">
                  <h2 className="text-[40px] font-semibold text-primary-800 mb-2">
                    Upload Successful
                  </h2>
                  <p className="text-input-text font-normal mb-8 leading-[29px]">
                    Your documents are being verified.
                    <br />
                    You will get an email notification once verification is
                    complete!
                  </p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="bg-[#024C6B] text-white w-[303px] h-[68px] rounded-[18px]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorInfo;

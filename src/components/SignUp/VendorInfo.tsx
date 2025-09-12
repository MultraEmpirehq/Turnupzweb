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
    <div className="flex w-[1062px] h-[886px] justify-center items-center shadow-lg rounded-[25px] py-8 px-24 relative bg-white">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-2">
          <p className="font-normal text-[57px] text-[#03648C]">
            Let’s sign you up
          </p>
          <p className="font-medium text-[16px] text-[#03648C]">
            Enter your details to get going
          </p>

          <div className="w-full flex gap-8">
            {/* Left Side */}
            <div className="flex flex-col p-2 gap-[8px]">
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Vendor’s First name
                </label>
                <input
                  type="text"
                  placeholder="Enter your First name"
                  className="text-[#7D7D7D] rounded-[8px] w-[386px] h-[48px] px-4 border border-[#ECECEC] bg-[#FCFCFC]"
                  required
                />
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Vendor’s Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="text-[#7D7D7D] rounded-[8px] w-[386px] h-[48px] px-4 border border-[#ECECEC] bg-[#FCFCFC]"
                  required
                />
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="text-[#7D7D7D] rounded-[8px] w-[386px] h-[48px] px-4 border border-[#ECECEC] bg-[#FCFCFC]"
                  required
                />
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Upload a Selfie Holding the ID
                </label>
                <div
                  className={`flex flex-col items-center justify-center w-[386px] border border-[#ECECEC] bg-[#FCFCFC] rounded-[8px] h-[154px] p-4 cursor-pointer transition ${
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
                      <div className="flex flex-col items-center justify-center text-[#024C6B] font-semibold text-[18px]">
                        <PermMediaIcon
                          style={{
                            fontSize: "40px",
                            marginBottom: "20px",
                            color: "#7D7D7D",
                          }}
                        />
                        <span>Click to upload or drag and drop</span>
                        <span className="text-xs text-[#7D7D7D] text-[16px] font-normal">
                          PDF, JPEG, PNG less than 1MB
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col p-2 gap-[8px]">
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Johndoe@yahoo.com"
                  className="text-[#7D7D7D] rounded-[8px] w-[386px] h-[48px] px-4 border border-[#ECECEC] bg-[#FCFCFC]"
                  required
                />
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Country
                </label>
                <select
                  className="text-[#7D7D7D] rounded-[8px] w-[386px] h-[48px] px-4 border border-[#ECECEC] bg-[#FCFCFC]"
                  required
                >
                  <option value="">Select</option>
                  <option value="ng">Nigeria</option>
                  <option value="us">USA</option>
                </select>
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Select Valid government -issued ID for Upload
                </label>
                <select
                  className="text-[#7D7D7D] rounded-[8px] w-[386px] h-[48px] px-4 border border-[#ECECEC] bg-[#FCFCFC]"
                  required
                >
                  <option value="">Select Option</option>
                  <option value="passport">Passport</option>
                  <option value="driver">Driver’s License</option>
                </select>
              </div>
              <div className="mb-[40px] flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[#03648C] text-[14px] font-bold"
                >
                  Upload a Selfie Holding the ID
                </label>
                <div
                  className={`flex flex-col items-center justify-center w-[386px] border border-[#ECECEC] bg-[#FCFCFC] rounded-[8px] h-[154px] p-4 cursor-pointer transition ${
                    dragActive
                      ? "border-[#03648C] bg-blue-50"
                      : "border-[#ECECEC]"
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
                      <div className="flex flex-col items-center justify-center text-[#024C6B] font-semibold text-[18px]">
                        <PermMediaIcon
                          style={{
                            fontSize: "40px",
                            marginBottom: "20px",
                            color: "#7D7D7D",
                          }}
                        />
                        <span>Click to upload or drag and drop</span>
                        <span className="text-xs text-[#7D7D7D] text-[16px] font-normal">
                          PDF, JPEG, PNG less than 1MB
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="shadow-md bg-[#024C6B] text-white text-[16px] font-normal w-[373px] h-[56px] rounded-[16px] mt-8 cursor-pointer"
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
                  <h2 className="text-[40px] font-semibold text-[#03648C] mb-2">
                    Upload Successful
                  </h2>
                  <p className="text-[#7D7D7D] font-normal mb-8 leading-[29px]">
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

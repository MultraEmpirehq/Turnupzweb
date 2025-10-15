import React from "react";

const UploadCover = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=""></div>
      <div className="w-[1005px] h-[380px] bg-neutral-white flex flex-col justify-center items-center border border-neutral-white-50">
        <div className="">
          <div className="w-[502px] h-[186px] bg-white flex flex-col justify-center mb-4"></div>
          <p className="text-primary-800 font-medium">
            Only support .jpg, .png files{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadCover;

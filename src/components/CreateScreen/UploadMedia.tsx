import React from "react";

const UploadMedia = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=""></div>
      <div className="w-[1005px] h-[380px] bg-[#FCFCFC] flex flex-col justify-center items-center border border-[#ECECEC]">
        <div className="">
          <div className="w-[502px] h-[186px] bg-white flex flex-col justify-center mb-4"></div>
          <p className="text-[#03648C] font-medium">
            Only support .jpg, .png and .svg and zip files
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadMedia;

import React from "react";

const PaymentInfo = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-8">
        <p className="text-primary-800 text-[26px] font-semi-bold">
          Please select payment methods to be linked with this Event
        </p>
        <div className="w-[1005px] bg-neutral-white border border-neutral-white-50 rounded-lg p-8">
          <ul className="w-full space-y-8">
            <li className="w-full flex justify-between">
              <p className="text-primary-800 text-[24px]">
                Credit / Debit Cards
              </p>
              <div>Image</div>
            </li>
            <li className="w-full flex justify-between">
              <p className="text-primary-800 text-[24px]">PayPal</p>
              <div>Image</div>
            </li>
            <li className="w-full flex justify-between">
              <p className="text-primary-800 text-[24px]">Online Banking</p>
              <div>Image</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;

import React from "react";
import { SecondaryButton } from "./SecondaryButton";

export const InfoBanner = () => {
  return (
    <div className="max-w-7xl mx-auto   my-16 px-4 lg:px-12">
      <div className="flex  flex-col items-center bg-gradient-to-b from-blue-500 to-[#03b2e2]  py-[120px] [box-shadow:0px_1px_8px_rgba(13,34,71,0.12),0px_28px_108px_rgba(13,34,71,0.1),inset_0px_-1px_1px_rgba(13,34,71,0.12)] sm:rounded-2xl ">
        <h2 className="text-center font-display text-[32px] leading-[40px] tracking-[-.02em] text-white sm:text-[40px] sm:leading-[48px]">
          Ready to try SyncGuide?
          {/* <br />
          easy for everyone. */}
        </h2>
        <p className="mt-8 text-center font-display text-[20px] leading-8 text-white opacity-80">
        Join our waitlist to stay updated on our progress!
        </p>
        <div className="mt-10 flex flex-1 gap-4">
          <SecondaryButton>Join Waitlist</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
import { uniq } from "lodash";
import { SecondaryButton } from "./SecondaryButton";

const Hero = () => {
  return (
    <section className="dark:bg-gray-900 md:mb-36 mt-12 lg:mt-32 relative min-h-[100vh] ">
      <div className="py-8  mx-auto max-w-7xl text-center lg:py-0 px-4 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        ></a>

        <h1 className="mx-auto px-2 font-display text-3xl font-medium tracking-tight text-gray-700 sm:text-5xl md:max-w-7xl lg:max-w-7xl lg:text-6xl xl:text-7xl">
          Keep Your Software
          <div className="mx-auto flex items-center justify-center space-x-1 self-center overflow-hidden sm:space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-2 inline h-6 w-6 flex-shrink-0 -rotate-180 cursor-pointer black hover:fill-blue-500 sm:h-8 sm:w-8"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>{" "}
            <span className="max-w-[70vw] animate-text-shimmer2 bg-gradient-to-r from-blue-500 to-[#03b2e2] bg-clip-text pb-2 text-4xl text-transparent sm:min-w-[70vw] sm:text-6xl md:min-w-[65vw] md:max-w-none md:pb-2 md:text-5xl lg:min-w-[73vw] lg:text-6xl xl:min-w-[56rem] xl:text-7xl">
              step-by-step guides
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sh-6 mt-2 h-6 w-6 flex-shrink-0 cursor-pointer black hover:fill-blue-500 sm:h-8 sm:w-8"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>{" "}
          </div>
          always updated.
        </h1>

        <p className="mb-12 mt-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Create Interactive Knowledge Base and Update in One Click
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* <PrimaryButton>Try Free For 7 days</PrimaryButton> */}
          <SecondaryButton>Join Waitlist</SecondaryButton>
        </div>

        <div className="relative shadow-slate-800 mx-auto overflow-hidden rounded-xl text-center md:max-w-screen-md lg:max-w-7xl shadow-2xl border-solid">
          <Image
            width={1600}
            height={1000}
            src={"/syngGuideVideoOverlay.svg"}
            alt="Hero image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute -inset-12 rounded-full bg-black opacity-50 blur-xl"></div>

            <div className="relative">
              <div className="play-icon-wrapper text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // className="play-icon animate-fade"
                  viewBox="0 0 24 24"
                  fill="black"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              {/* <div className="absolute -inset-4 rounded-full bg-blue-400 opacity-30 blur-lg animate-pulse"></div> */}
              <div className="absolute -inset-8 rounded-full bg-blue-300 opacity-20 blur-2xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

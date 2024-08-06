"use client";
import React, { useState, useEffect } from "react";
import { SecondaryButton } from "./SecondaryButton";

const texts = [
  "step-by-step guides",
  "interactive product demos",
  "no-code help center",
  "knowledge base",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState(texts[0]);

  const handleNextText = () => {
    setCurrentText((prevText) => {
      const currentIndex = texts.indexOf(prevText);
      const nextIndex = (currentIndex + 1) % texts.length;
      return texts[nextIndex];
    });
  };

  const handlePrevText = () => {
    setCurrentText((prevText) => {
      const currentIndex = texts.indexOf(prevText);
      const prevIndex = (currentIndex - 1 + texts.length) % texts.length;
      return texts[prevIndex];
    });
  };

  useEffect(() => {
    const interval = setInterval(handleNextText, 3000); // zmienia tekst co 3 sekundy

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dark:bg-gray-900  relative min-h-[100vh] ">
      <div className="py-[200px] md:py-[250px] mx-auto max-w-7xl text-center  px-4 lg:px-12">
        <h1 className="mx-auto px-2  font-display text-3xl font-medium tracking-tight text-gray-700 sm:text-5xl md:max-w-7xl lg:max-w-7xl lg:text-6xl xl:text-7xl">
          Keep Your
          <div className="mx-auto flex items-center justify-center space-x-1 self-center overflow-hidden sm:space-x-4 ">
            <svg
              onClick={handlePrevText}
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
              {currentText}
            </span>
            <svg
              onClick={handleNextText}
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

        <div className="">
          <a className="" href="https://admin.syncguide.app">
            <SecondaryButton>Try SyncGuide</SecondaryButton>
          </a>
        </div>

        <div className="mx-auto mt-10 flex w-full items-center justify-center">
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            <div className="avatar border-gray-200" style={{ borderWidth: "1px" }}>
              <div className="w-12">
                <img
                  loading="lazy"
                  src="https://senjaio.b-cdn.net/public/avatar/dbd1520e-3ffa-4446-9450-cdd591473cd1_Titus%20-%20Pic.png?width=63&height=63&format=webp"
                  alt="Avatar 1"
                />
              </div>
            </div>
            <div className="avatar border-gray-200" style={{ borderWidth: "1px" }}>
              <div className="w-12">
                <img
                  loading="lazy"
                  src="https://senjaio.b-cdn.net/public/media/48d77934-42d7-4e65-81ad-bdb648c7b160_d03af170-51f4-4f32-ae3d-6e26b8b772a8_sagar.webp"
                  alt="Avatar 2"
                />
              </div>
            </div>
            <div className="avatar border-gray-200" style={{ borderWidth: "1px" }}>
              <div className="w-12">
                <img
                  loading="lazy"
                  src="https://senjaio.b-cdn.net/public/media/4f8348f0-c8e7-4484-8f49-017da533c524_e6b282a1-aa72-4445-bf6d-96255d877548_Screenshot%202024-02-05%20at%208.35.40%E2%80%AFAM.png"
                  alt="Avatar 3"
                />
              </div>
            </div>
            <div className="avatar border-gray-200" style={{ borderWidth: "1px" }}>
              <div className="w-12">
                <img
                  loading="lazy"
                  src="https://senjaio.b-cdn.net/public/media/0fd8bcc1-c7a9-4c09-9233-6b49b81176c8_3892e058-ea40-4e49-933b-2c5ffaf02bd1_download%20%281%29.jpeg?width=63&height=63&format=webp"
                  alt="Avatar 4"
                />
              </div>
            </div>
            <div className="avatar border-gray-200" style={{ borderWidth: "1px" }}>
              <div className="w-12">
                <img
                  loading="lazy"
                  src="https://senjaio.b-cdn.net/public/avatar/16bb277c-6785-4ad4-a8b2-5c697d1c6781_IndraUnEduards-037-Edit.jpg?width=63&height=63&format=webp"
                  alt="Avatar 5"
                />
              </div>
            </div>
            <div
              className="avatar border-gray-400 hidden lg:inline-flex"
              style={{ borderWidth: "0" }}
            >
              <div className="w-12">
                <img
                  loading="lazy"
                  src="https://senjaio.b-cdn.net/public/media/f6be11a2-a756-467d-9c6b-6acc2361cd05_ddad0723-9336-4a45-8539-7861d29299d9_1706996562179.jpeg?&format=webp"
                  alt="Avatar 6"
                />
              </div>
            </div>
          </div>
          <a
            href="https://love.guidejar.com"
            target="_blank"
            className="flex flex-col hover:opacity-80 justify-center ml-2"
          >
            <div className="flex items-center space-x-1">
              <div className="mt-2 flex items-center justify-center space-x-1">
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
                  className="w-[1.1rem] fill-[#FDB241] text-[#FDB241]"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="w-[1.1rem] fill-[#FDB241] text-[#FDB241]"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="w-[1.1rem] fill-[#FDB241] text-[#FDB241]"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="w-[1.1rem] fill-[#FDB241] text-[#FDB241]"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="w-[1.1rem] fill-[#FDB241] text-[#FDB241]"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
            <span className="text-sm leading-4 mb-2 text-slate-700 font-display">
              loved by 4000+ customers
            </span>
          </a>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="relative shadow-slate-800 mx-auto overflow-hidden rounded-xl text-center md:max-w-screen-md lg:max-w-7xl shadow-2xl border-solid">
          <Image width={1600} height={1000} src={"/syngGuideVideoOverlay.svg"} alt="Hero image" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute -inset-12 rounded-full bg-black opacity-50 blur-xl"></div>
            <div className="relative">
              <div className="play-icon-wrapper text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <div className="absolute -inset-8 rounded-full bg-blue-300 opacity-20 blur-2xl animate-pulse-slow"></div>
            </div>
          </div>
        </div> */
}

import React from "react";

export const HowItWorks = () => {
  return (
    <>
      <section class="py-10  sm:py-16 lg:py-24">
        <div className="pb-32  flex flex-col justify-center items-center  dark:bg-gray-800">
          <h3 className="  text-center text-3xl font-semibold text-gray-800 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
            How It Works ?
          </h3>
        </div>

        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
              <img
                class="w-full rounded-md"
                src="https://cdn.syncguide.app/f999524360a8de59b088f505a5c0e9c8cccda085b0000e4197e4c042d709d280"
                alt=""
              />
            </div>

            <div>
              {/* <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  class="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div> */}
              <h2 class=" text-3xl leading-tight font-medium text-black sm:text-4xl lg:text-3xl ">
                <span className="text-blue-600 bg-blue-100 w-[40px] h-[40px]  rounded-full text-center flex justify-center align-baseline">1.</span>{" "}
                Build a perfect team within hours.
              </h2>
              <p class="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia conse duis enim velit mollit. Exercitation veniam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

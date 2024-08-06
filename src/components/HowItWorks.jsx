import React from "react";

export const HowItWorks = () => {
  return (
    <>
      <section className=" mb-12 md:mb-64">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              How does it work?
            </h2>
          </div>

          <div className="pt-12 sm:pt-12 " data-v-98f74278="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-14 sm:gap-y-24 grid lg:grid-cols-3 ">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-3xl">
                  1. Create
                  <span className="animate-text-shimmer2 bg-gradient-to-r from-blue-500 to-[#03b2e2] bg-clip-text pb-2  text-transparent">
                    {" "}
                    Smart Screens
                  </span>
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  Single Screenshot, Many Variations. Effortlessly create and maintain diverse
                  screenshot variations from a single source, ensuring your content remains current.
                </p>
              </div>
              <div className="bg-gray-900/5 bg-gradient-to-b from-blue-500 to-[#03b2e2] dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:col-span-2 p-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10">
                  <img src="/howto1.png" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 sm:py-12" data-v-98f74278="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-14 sm:gap-y-24 grid lg:grid-cols-3 ">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-3xl">
                  2. Create a Guide Using Smart Screens
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  Leverage the power of smart screens to create comprehensive and interactive
                  guides. Easily update and customize your guides to ensure they provide the most
                  relevant information to your audience.
                </p>
              </div>
              <div className="bg-gray-900/5 bg-gradient-to-b from-blue-500 to-[#03b2e2] dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:col-span-2 p-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10">
                  <img src="/howto2.png" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="" data-v-98f74278="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-14 sm:gap-y-24 grid lg:grid-cols-3 ">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-3xl">
                  3. Share or connect
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  Share via link, copy as HTML or connect with your favorite tools (e.g. Confluence,
                  Notion, Google Docs) .
                </p>
              </div>
              <div className="bg-gray-900/5 bg-gradient-to-b from-blue-500 to-[#03b2e2] dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:col-span-2 p-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10">
                  <img src="/howto3.png" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 " data-v-98f74278="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-14 sm:gap-y-24 grid lg:grid-cols-3 ">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-3xl">
                  4. Setup help center
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  Create your own help center with a custom domain.
                </p>
              </div>
              <div className="bg-gray-900/5 bg-gradient-to-b from-blue-500 to-[#03b2e2] dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:col-span-2 p-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10">
                  <img src="/howto4.png" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

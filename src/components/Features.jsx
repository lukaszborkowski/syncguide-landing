import Image from "next/image";
import React from "react";

const features = [
  {
    items: [
      {
        title: "Custom styling",
        description:
          "Customize styles, texts, and images to match your own branding. All with just a few clicks.",
      },
      {
        title: "Mobile-Friendly Design",
        description:
          "Create a job board that look great at every screen size with a responsive version of your job board.",
      },
      {
        title: "Dark theme",
        description:
          "Create a job board that look great at every screen size with a responsive version of your job board.",
      },
      {
        title: "Custom icons and illustrations",
        description:
          "We offer custom icons and illustrations crafted by our graphic artists, and our design team will ensure the optimal conversion of your job board. Everything available in the PRO plan.",
      },
    ],
    imgUrl: "/feature_1.svg",
  },
  {
    items: [
      {
        title: "Charge for Job Postings",
        description: "Charge employers for job postings from day one or allow free job postings.",
      },
      {
        title: "Upsell With Jobs Bundle",
        description:
          "Increase your revenue by offering a jobs bundle instead of a single job posting.",
      },
    ],
    imgUrl: "/feature_2.svg",
  },
  {
    items: [
      {
        title: "Some",
        description: "Loremmmm",
      },
    ],
    imgUrl: "/feature_3.svg",
  },
];
const Features = () => {
  return (
    <section className="p-4 lg:p-8 mb-40">
      <div className="container max-w-7xl mx-auto space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col overflow-hidden rounded-md mb-20 shadow-sm ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <Image
              src={feature.imgUrl}
              alt={`Feature image ${index}`}
              className=" dark:bg-gray-500 aspect-video object-fill"
              width={540}
              height={360}
              objectFit="cover"
            />
            <div
              className={`flex flex-col justify-center flex-1  ${
                index % 2 === 0 ? "pl-20" : "pr-20"
              } dark:bg-gray-900`}
            >
              {feature.items.map((item, index) => (
                <div className="mb-8" key={index}>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className=" dark:text-gray-400">{item.description}</p>
                </div>
              ))}
              {/* <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

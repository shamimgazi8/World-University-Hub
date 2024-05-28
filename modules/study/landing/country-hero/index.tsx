import Breadcrumbs from "@/modules/@common/breadcrumbs";
import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Study Abroad",
    link: "/study-abroad",
  },
];
const CountryHero = () => {
  return (
    <section className="bg-[#92003B] py-0 mb-[80px]">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center lg:gap-[90px]">
          <div className="py-8 lg:py-[80px]  ">
            <div className="bg-white inline-block px-2 rounded-[2px] mb-[15px]">
              <p className="p1 font-medium mb-0 text-[#92003B]">Destination</p>
            </div>
            <h1 className="h3 text-white mb-5">
              Country Guides - Learn More About Different Study Abroad
              Destinations
            </h1>
            <div className="mb-5">
              <Breadcrumbs
                data={data}
                classes={{ root: "text-white", last: "text-white" }}
              />
            </div>
            <p className="text-white">
              In this country guide section, you can find important information
              about your potential study abroad destinations. Learn about the
              requirements, application period, language, culture and student
              life of different countries.
            </p>
          </div>
          <div>
            <div className="max-w-[431px] lg:h-[500px]">
              <Image
                src="/images/country/country-hero.png"
                alt="Country Hero"
                width={431}
                height={500}
                className="w-full h-full md:mt-[80px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero;

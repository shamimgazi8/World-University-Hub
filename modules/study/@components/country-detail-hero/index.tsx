import { excerpt } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

const CountryDetailHero = ({ classes, data }: any) => {
  return (
    <section
      className={`bg-gradient-to-b from-primary-light to-secondary-light pt-8 md:pt-10 lg:pt-[60px]  ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div>
            <h1 className="text-h3">
              {`Study in ${data?.name}: A Guide for International Students`}
            </h1>
            {data?.shortdescription && (
              <p className="text-p2">{excerpt(data?.shortdescription, 500)}</p>
            )}
          </div>
          {data?.featureImage && (
            <div>
              <Image
                src={data?.featureImage}
                alt={data?.name}
                width={460}
                height={500}
                className="rounded-lg w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryDetailHero;

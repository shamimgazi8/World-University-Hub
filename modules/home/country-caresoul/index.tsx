"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import CountryCard from "@/modules/@common/country-card";
import { useGetCountriesDataQuery } from "@/appstore/country/country-api";
import { generateQueryString } from "@/helpers/utils";
import { isErrored } from "stream";
import Skeleton from "@/modules/@common/skeleton";

const bgColor = [
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
  "linear-gradient(180deg, rgba(65, 22, 213, 0) 38.5%, #4116D5 100%)",
  "linear-gradient(180deg, rgba(49, 218, 212, 0) 38.5%, #31DAD4 100%)",
  "linear-gradient(180deg, rgba(20, 245, 106, 0) 38.5%, #14F56A 100%)",
  "linear-gradient(180deg, rgba(252, 106, 49, 0) 38.5%, #FC6A31 100%)",
];

const CountryCarousel = () => {
  const [isActive, setIsActive] = useState(0);

  const queryParams: any = {
    limit: 15,
    topCountries: true,
  };
  const queryString = generateQueryString(queryParams);

  const { data, isLoading, isError } = useGetCountriesDataQuery(queryString);
  const dataArr = data && data?.data;
  const len = data && dataArr?.length;

  const maxWidth = () => {
    if (len == 1) {
      return "sm:max-w-[305px] grid-cols-1";
    } else if (len == 2) {
      return "sm:max-w-[676px] grid-cols-1 sm:grid-cols-2";
    } else if (len == 3) {
      return "lg:max-w-[1014px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    } else if (len == 4) {
      return "lg:max-w-[1350px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    } else if (len == 5) {
      return "lg:max-w-[1350px] grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
    }
  };

  const settings = {
    infinite: true,
    arrows: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    autoplay: false,
    slidesToScroll: 1,
    className: "believe_innovation",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: false,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <>
      {!isError && isLoading ? (
        <>
          <section className="mt-[100px]">
            <div className="container ">
              <div className="grid grid-cols-4 gap-[30px] mt-10">
                {new Array(4).fill(1).map((_, i) => {
                  return <Skeleton key={i} className={"h-[380px]"} />;
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="overflow-hidden">
            <div className="container ">
              <div
                className={`max-w-[810px] mb-[-48px] lg:mb-[-70px] ${
                  len < 5 ? "flex justify-center mx-auto" : ""
                }`}
              >
                <h2 className={`text-[32px] pl-3`}>
                  Top Study Abroad Countries
                </h2>
              </div>
              <div
                className={`${
                  len > 5 ? "lg:mr-[-26vw]" : ""
                } overflow-hidden lg:pt-[60px] pt-[20px] mt-10  mx-auto`}
              >
                {len > 5 ? (
                  <>
                    <Slider {...settings}>
                      {dataArr?.map((item: any, i: any) => {
                        const itemFormatted = {
                          ...item,
                          hoverBackground: bgColor[i],
                        };
                        return (
                          <CountryCard
                            data={itemFormatted}
                            key={i}
                            classes={{ root: "mx-2 lg:m-4" }}
                          />
                        );
                      })}
                    </Slider>
                  </>
                ) : (
                  <div
                    className={`grid gap-5 lg:gap-[30px] ${maxWidth()} mx-auto`}
                  >
                    {dataArr?.map((item: any, i: any) => {
                      const itemFormatted = {
                        ...item,
                        hoverBackground: bgColor[i],
                      };
                      return <CountryCard data={itemFormatted} key={i} />;
                    })}
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CountryCarousel;

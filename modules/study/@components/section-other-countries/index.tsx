"use client";

import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import CountryCard from "../country-card";
import { useGetCountriesQuery } from "@/appstore/global/global-api";

const SectionOtherCountries = () => {
  const params = useParams();
  const regionSlug: any = params?.region_slug;
  const countrySlug = params?.country_slug;

  const replaceName: any = {
    asia: "Asian",
    europe: "European",
    africa: "African",
    oceania: "Oceanian",
    polar: "Polar",
    americas: "Americas",
  };

  const queryParams: any = {
    limit: 21,
    topCountries: true,
    region: regionSlug,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetCountriesQuery(queryString);
  const dataArr = data?.data;

  const filterdArr =
    dataArr && dataArr?.filter((item: any) => item?.slug !== countrySlug);
  const len = filterdArr?.length;

  const maxWidth = () => {
    if (len == 1) {
      return "max-w-[160px] w-full grid-cols-1";
    } else if (len == 2) {
      return "max-w-[350px] w-full grid-cols-2";
    } else if (len == 3) {
      return "max-w-[540px] w-full grid-cols-2 lg:grid-cols-3";
    } else if (len == 4) {
      return "max-w-[730px] w-full grid-cols-2 lg:grid-cols-4";
    } else if (len == 5) {
      return "max-w-[920px] w-full grid-cols-2 lg:grid-cols-5";
    } else if (len == 6) {
      return "max-w-[1110px] w-full grid-cols-2 lg:grid-cols-6";
    }
  };

  const settings = {
    infinite: false,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    autoplay: false,
    dots: true,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      {!isError && isLoading ? (
        <>
          <section className="bg-grey pt-8 lg:pt-[70px] pb-[80px] lg:pb-[100px]">
            <div className="container">
              <h3 className="text-center">
                <Skeleton className={"h-[50px] w-[500px] mx-auto"} />
              </h3>
              <div
                className={`grid grid-cols-6 gap-6 lg:gap-[30px] my-6 lg:my-10`}
              >
                {new Array(6).fill(1).map((_, i) => {
                  return <Skeleton key={i} className={"h-[180px]"} />;
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {filterdArr && len > 0 && (
            <>
              {filterdArr && len > 6 ? (
                <section className="bg-grey pt-8 lg:pt-[70px] pb-[80px] lg:pb-[100px]">
                  <div className="container">
                    <h3 className="text-center">
                      Other {replaceName[regionSlug]} Countries
                    </h3>
                    <div className="other_countries">
                      <Slider {...settings}>
                        {filterdArr?.map((item: any, i: any) => {
                          return (
                            <CountryCard
                              classes={{ root: "m-[10px] lg:m-[15px]" }}
                              data={item}
                              regionSlug={"asia"}
                              key={i}
                            />
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </section>
              ) : (
                <section className="bg-grey pt-8 lg:pt-[70px] pb-[80px] lg:pb-[100px]">
                  <div className="container">
                    <h3 className="text-center">
                      Other {replaceName[regionSlug]} Countries
                    </h3>
                    <div
                      className={`grid gap-6 lg:gap-[30px] ${maxWidth()} mx-auto my-6 lg:my-10`}
                    >
                      {filterdArr?.map((item: any, i: any) => {
                        return (
                          <CountryCard
                            classes={{ root: "" }}
                            data={item}
                            regionSlug={regionSlug}
                            key={i}
                          />
                        );
                      })}
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default SectionOtherCountries;

"use client";

import { isJson } from "@/helpers/utils";
import Image from "next/image";

interface propTypes {
  data?: any;
  title?: string;
  classes?: {
    root?: string;
  };
}
const CountryQuickFacts = ({ data, classes }: propTypes) => {
  const timeZone =
    data?.timeZones && isJson(data?.timeZones)
      ? JSON.parse(data?.timeZones)
      : null;

  const acdmYear = data?.academicYear && data?.academicYear?.split(",");
  const acdmYearFirst = acdmYear && acdmYear[0];
  const acdmYearMore =
    acdmYear && acdmYear?.length > 1 ? acdmYear?.slice(1) : null;

  const timeZoneFirst = timeZone && timeZone[0];
  const timeZoneMore =
    timeZone && timeZone?.length > 1 ? timeZone?.slice(1) : null;

  const dataQuicFact = [
    {
      imgSrc: "/images/country/quick-facts/capital.png",
      title: "Capital",
      des: data?.capital,
    },
    {
      imgSrc: "/images/country/quick-facts/languages.png",
      title: "Language",
      des: data?.language,
    },
    {
      imgSrc: "/images/country/quick-facts/population.png",
      title: "Population",
      des: data?.population,
    },
    {
      imgSrc: "/images/country/quick-facts/area-size.png",
      title: "Area Size",
      des: data?.area,
    },
    {
      imgSrc: "/images/country/quick-facts/graduation.png",
      title: "International students",
      des: data?.noOfInternationalStudents,
    },
    {
      imgSrc: "/images/country/quick-facts/calendar.png",
      title: "Academic Year",
      des: data?.academicYear,
    },
    {
      imgSrc: "/images/country/quick-facts/currency.png",
      title: "Currency",
      des: data?.currency,
    },
    {
      imgSrc: "/images/country/quick-facts/calling.png",
      title: "Calling Code",
      des: data?.phoneCode,
    },
    {
      imgSrc: "/images/country/quick-facts/time-zone.png",
      title: "Time Zone",
      des: "",
    },
  ];

  return (
    <div className={`my-6 text-center ${classes?.root ? classes?.root : ""}`}>
      <h3 className="text-center h4">{`${data?.name} - Quick facts & figures`}</h3>
      <div className="grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 gap-7 mt-1">
        {dataQuicFact?.map((item: any, i: number) => {
          return (
            <div key={i} className="flex items-center flex-col shadow-one p-4">
              <Image
                src={item?.imgSrc}
                alt={item?.title}
                width={60}
                height={60}
                className="rounded mb-5 object-cover"
              />
              <h5 className="text-center mb-[2px]">{item?.title}</h5>
              <div className="text-center mb-0">
                {item?.title !== "Time Zone" ? (
                  <>
                    {item?.title == "Academic Year" ? (
                      <>
                        {acdmYearFirst ? (
                          <div className="flex items-center gap-1">
                            <div>{acdmYearFirst}</div>
                            {acdmYearMore ? (
                              <div className="tooltip_parent text-p4 text-black underline underline-offset-4 decoration-1 cursor-pointer">
                                Show More({`${acdmYearMore?.length}`})
                                <div className="tooltip top">
                                  {acdmYearMore?.map((acdm: any, i: number) => {
                                    return <div key={i}>{acdm}</div>;
                                  })}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ) : (
                          "N/A"
                        )}
                      </>
                    ) : (
                      <span className=" line-clamp-2">
                        {item?.des && item?.des != 0 ? item.des : "N/A"}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {timeZoneFirst ? (
                      <div className="flex items-center gap-1">
                        <div>{timeZoneFirst?.gmtOffsetName}</div>
                        {acdmYearMore ? (
                          <div className="tooltip_parent text-p4 text-black underline underline-offset-4 decoration-1 cursor-pointer">
                            Show More({`${timeZoneMore?.length}`})
                            <div className="tooltip top">
                              {timeZoneMore?.map((tm: any, i: number) => {
                                return <div key={i}>{tm?.gmtOffsetName}</div>;
                              })}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      "N/A"
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryQuickFacts;

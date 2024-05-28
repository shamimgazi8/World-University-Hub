"use client";
import { useAllCompareQuery } from "@/appstore/user/compare/compare-api";
import { htmlParse } from "@/helpers/utils";
import CommonPageHeader from "@/modules/@common/common-pages-header";
import ShowRanking from "@/modules/@common/show-ranking";
import Skeleton from "@/modules/@common/skeleton";
import UniversityOverviewStatistics from "@/modules/universities/overview/statistics";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";

const CompareUniversities = () => {
  const {
    data: compare,
    isError,
    isLoading,
  } = useAllCompareQuery("?reference=UNIVERSITY");
  return (
    <div>
      <CommonPageHeader title="Compare University" />
      {!isError && isLoading ? (
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {new Array(3).fill(1).map((_, i) => {
                return <Skeleton key={i} className={"h-screen"} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="container">
            <div className="w-full overflow-auto">
              <table className="min-w-[1000px] text-start">
                {/* Comparing University’s */}

                <tbody>
                  <tr>
                    <td className="p-4 border w-3/12">
                      <div>
                        <h4 className="text-gradient">
                          Comparing <span className="block">University’s</span>
                        </h4>
                        <p>You Can Compare Up To 3 University’s</p>
                      </div>
                    </td>
                    {compare &&
                      compare?.data &&
                      compare.data.length > 0 &&
                      compare.data.map((item: any, i: any) => {
                        return (
                          <Fragment key={i}>
                            <td className="p-4 border w-3/12 align-top">
                              <div>
                                <Link
                                  href={"#"}
                                  className="w-full h-[160px] border self-start rounded-md p-4 flex items-center justify-center mb-2"
                                >
                                  <Image
                                    src={`${item?.university?.logo}`}
                                    alt="Compare"
                                    width={150}
                                    height={70}
                                    className="max-h-[70px] object-contain"
                                  />
                                </Link>
                                <div className="text-start mb-[10px]">
                                  <h5>{item?.university?.name}</h5>
                                  <div className="flex flex-col gap-1.5">
                                    <div className="flex gap-[5px]">
                                      <IoMdPin className="text-base mt-1" />
                                      <p className="text-p3 mb-0">
                                        {item?.university?.city?.name} ,
                                        {item?.university?.country?.name}
                                      </p>
                                    </div>
                                    <div className="flex gap-[5px]">
                                      <BsBuildings className="text-base mt-1" />
                                      <p className="text-p3 mb-0">
                                        {item?.university?._count?.campus}
                                        Campus
                                      </p>
                                    </div>
                                    <div className="flex gap-[5px]">
                                      <AiFillStar className="text-base mt-1 fill-[#FFB636]" />
                                      <p className="text-p3 mb-0">
                                        {item?.university?._count?.review ?? 0}{" "}
                                        Reviews
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </Fragment>
                        );
                      })}
                  </tr>
                </tbody>

                {/* Ranking */}

                <tbody>
                  <tr>
                    <td className="p-4 border text-start font-medium">
                      Ranking
                    </td>
                    <td className="p-4 border">
                      <div className="mb-2">
                        {compare &&
                          compare?.data &&
                          compare.data.length > 0 &&
                          compare.data.map((item: any, i: any) => {
                            return (
                              <Fragment key={i}>
                                <ShowRanking
                                  className={{
                                    root: "!grid-cols-2 !gap-5 !pt-0",
                                    content_wrapper:
                                      "!flex flex-col items-center",
                                    text_color: "text-black",
                                  }}
                                  id="ranking"
                                  // isDetail={false}
                                  universitySlug={item?.university?.slug}
                                />
                              </Fragment>
                            );
                          })}
                      </div>
                    </td>
                  </tr>
                </tbody>

                {/* Key Statistics */}

                <tbody>
                  <tr>
                    <td className="p-4 border text-start font-medium align-top">
                      Key Statistics
                    </td>
                    {compare &&
                      compare?.data &&
                      compare.data.length > 0 &&
                      compare.data.map((item: any, i: any) => {
                        return (
                          <Fragment key={i}>
                            <td className="p-4 border align-top">
                              <UniversityOverviewStatistics
                                className="uni-section inside_compare"
                                id="statistics"
                                data={item?.university}
                              />
                            </td>
                          </Fragment>
                        );
                      })}
                  </tr>
                </tbody>

                {/* Overview */}

                <tbody>
                  <tr>
                    <td className="p-4 border text-start font-medium align-top">
                      Overview
                    </td>
                    {compare &&
                      compare?.data &&
                      compare.data.length > 0 &&
                      compare.data.map((item: any, i: any) => {
                        return (
                          <Fragment key={i}>
                            <td className="p-4 border align-top">
                              <div>
                                <p className="mb-0">
                                  {htmlParse(item?.university?.description)}
                                </p>
                              </div>
                            </td>
                          </Fragment>
                        );
                      })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CompareUniversities;

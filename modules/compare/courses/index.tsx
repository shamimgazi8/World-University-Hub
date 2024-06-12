"use client";

import { useAllCompareQuery } from "@/appstore/user/compare/compare-api";
import CommonPageHeader from "@/modules/@common/common-pages-header";
import Skeleton from "@/modules/@common/skeleton";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { TbLanguage } from "react-icons/tb";

const CompareCourses = () => {
  const {
    data: compare,
    isLoading,
    isError,
  } = useAllCompareQuery("?reference=COURSE");

  return (
    <div>
      <CommonPageHeader title="Compare Course" />
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
                <Fragment>
                  <tbody>
                    <tr>
                      <td className="p-4 border w-3/12">
                        <div>
                          <h4 className="text-gradient">
                            Comparing <span className="block">Course’s</span>
                          </h4>
                          <p>You Can Compare Up To 3 Course’s</p>
                        </div>
                      </td>
                      {compare &&
                        compare?.data &&
                        compare.data.length > 0 &&
                        compare.data.map((item: any) => {
                          return (
                            <Fragment>
                              <td className="p-4 border w-3/12 align-top">
                                <div>
                                  <Link
                                    href={"#"}
                                    className="w-full h-[160px] border self-start rounded-md p-4 flex items-center justify-center mb-2"
                                  >
                                    <Image
                                      src={`${item?.course?.university?.logo}`}
                                      alt="Compare"
                                      width={150}
                                      height={70}
                                      className="max-h-[70px] object-contain"
                                    />
                                  </Link>
                                  <div className="text-start mb-[10px]">
                                    <h5>{item?.course?.university?.name}</h5>
                                    <div className="flex flex-col gap-1.5">
                                      <div className="flex gap-[5px]">
                                        <IoMdPin className="text-base mt-1" />
                                        <p className="text-p3 mb-0">
                                          {item?.course?.university?.city?.name}{" "}
                                          ,
                                          {
                                            item?.course?.university?.country
                                              ?.name
                                          }
                                        </p>
                                      </div>
                                      <div className="flex gap-[5px]">
                                        <BsBuildings className="text-base mt-1" />
                                        <p className="text-p3 mb-0">
                                          {
                                            item?.course?.university?._count
                                              ?.campus
                                          }
                                          Campus
                                        </p>
                                      </div>
                                      <div className="flex gap-[5px]">
                                        <AiFillStar className="text-base mt-1 fill-[#FFB636]" />
                                        <p className="text-p3 mb-0">
                                          {item?.course?.university?._count
                                            ?.review ?? 0}{" "}
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
                  <tbody>
                    <tr>
                      <td className="p-4 border text-start font-medium">
                        Course Name
                      </td>
                      {compare &&
                        compare?.data &&
                        compare.data.length > 0 &&
                        compare.data.map((item: any) => {
                          return (
                            <Fragment>
                              <td className="p-4 border">
                                {item?.course?.displayName}
                              </td>
                            </Fragment>
                          );
                        })}
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="p-4 border text-start font-medium align-top">
                        Program Overview
                      </td>

                      {compare &&
                        compare?.data &&
                        compare.data.length > 0 &&
                        compare.data.map((item: any) => {
                          const dMethodFirst =
                            item?.course &&
                            item?.course?.deliveryMethods &&
                            item?.course?.deliveryMethods[0];
                          const dMethodMore =
                            item?.course &&
                            item?.course?.deliveryMethods &&
                            item?.course?.deliveryMethods?.length > 1
                              ? item?.course?.deliveryMethods.slice(1)
                              : null;
                          return (
                            <Fragment>
                              <td className="p-4 border align-top">
                                <div>
                                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                                    <Image
                                      src="/icons/hat-grey.png"
                                      width={18}
                                      height={18}
                                      alt="Level"
                                      className="object-contain max-w-[18px] shrink-0 mt-[2px]"
                                    />
                                    <div className="text-sm">Level</div>
                                    <div className="font-medium text-p1 col-span-2">
                                      <span className="text-gradient font-semibold">
                                        {item?.course?.courseLevel?.name}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="w-full bg-[#DADADA] h-[1px] my-[15px]"></div>
                                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                                    <Image
                                      src="/icons/clock-grey.png"
                                      width={18}
                                      height={18}
                                      alt="Level"
                                      className="object-contain max-w-[18px] shrink-0 mt-[2px]"
                                    />
                                    <div className="text-sm">Duration</div>
                                    <div className="font-medium text-p1 col-span-2">
                                      <span className="text-gradient font-semibold">
                                        {item?.course?.duration}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="w-full bg-[#DADADA] h-[1px] my-[15px]"></div>
                                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                                    <Image
                                      src="/icons/training-grey.png"
                                      width={18}
                                      height={18}
                                      alt="Level"
                                      className="object-contain max-w-[18px] shrink-0 mt-[2px]"
                                    />
                                    <div className="text-sm">
                                      Delivery Method
                                    </div>
                                    <div className="font-medium text-p1 col-span-2">
                                      {dMethodMore ? (
                                        <div className="tooltip_parent cursor-pointer rounded-full text-white bg-gradient-to-r from-primary to-secondary w-[16px] h-[16px] text-[10px] flex items-center justify-center">
                                          +{dMethodMore?.length}
                                          <div className="tooltip top">
                                            {dMethodMore?.map(
                                              (d: any, i: number) => {
                                                return (
                                                  <div key={i}>
                                                    <span className="text-p1 text-gradient font-semibold">
                                                      {d?.deliveryMethod?.name}
                                                    </span>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      ) : null}
                                    </div>
                                    <div></div>
                                    <div className="font-medium">
                                      {dMethodFirst ? (
                                        <span className="text-p1 text-gradient font-semibold">
                                          {dMethodFirst?.deliveryMethod?.name}
                                        </span>
                                      ) : (
                                        <span className="text-p1 text-gradient font-semibold">
                                          On Campus
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="w-full bg-[#DADADA] h-[1px] my-[15px]"></div>
                                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                                    <TbLanguage className="text-lg" />
                                    <div className="text-sm">Language</div>
                                    <div className="font-medium text-p1 col-span-2">
                                      <span className="text-gradient font-semibold">
                                        {item?.course?.language
                                          ? item?.course?.language
                                          : "N/A"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="w-full bg-[#DADADA] h-[1px] my-[15px]"></div>
                                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                                    <Image
                                      src="/icons/hat-with-dollar-grey.png"
                                      width={18}
                                      height={18}
                                      alt="Level"
                                      className="object-contain max-w-[18px] shrink-0 mt-[2px]"
                                    />
                                    <div className="text-sm">Scholarship</div>
                                    <div className="font-medium text-p1 col-span-2">
                                      <span className="text-gradient font-semibold">
                                        {item?.course?.scholarship
                                          ? "Available"
                                          : "Not Available"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </Fragment>
                          );
                        })}
                    </tr>
                  </tbody>
                </Fragment>
              </table>
            </div>
          </div>
          {/* <Modal
          title={<h5 className="border-b mb-0 pb-4">srfere</h5>}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          style={{ maxWidth: "900px" }}
          className="!w-full"
          bodyStyle={{ overflow: "auto" }}
        >
          <div className="pt-3">
            <div className="mb-3">All available course dates</div>

            <div className="flex flex-col gap-6">
              <div>
                <h6 className="mb-2">dfgdgdg</h6>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div> Start Date</div>
                      </th>
                      <th>
                        <div>End Date</div>
                      </th>
                      <th>
                        <div>Course Fee</div>
                      </th>
                      <th>
                        <div>Campus Location</div>
                      </th>
                      <th>
                        <div>Language of Instruction</div>
                      </th>
                      <th>
                        <div>Delivery Method</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>jfjg</div>
                      </td>
                      <td>
                        <div>gkjhgv</div>
                      </td>
                      <td>
                        <div>jvhjfgvjhfgv</div>
                      </td>
                      <td>
                        <div>fhfhf</div>
                      </td>
                      <td>
                        <div>hdgfchfc</div>
                      </td>
                      <td>
                        <div>gcghvjhv</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal> */}
        </section>
      )}
    </div>
  );
};

export default CompareCourses;

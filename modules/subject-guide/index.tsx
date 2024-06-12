"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import Breadcrumbs from "../@common/breadcrumbs";
import sg1 from "../../public/icons/sg1.png";
import sg2 from "../../public/icons/sg2.png";
import sg3 from "../../public/icons/sg3.png";
import sg4 from "../../public/icons/sg4.png";
import sg5 from "../../public/icons/sg5.png";
import sg6 from "../../public/icons/sg6.png";
import FeatureArticle from "./@components";
import SubjectGuidHero from "./@components/Hero";

import { generateQueryString } from "@/helpers/utils";
import { useGetAllSpecializationQuery } from "@/appstore/user/utility/utility-api";

const SubjectGuidePage = () => {
  const [bulk, setbulk] = useState(0);
  const queryParams: any = {
    withChild: true,
    limit: 6,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } =
    useGetAllSpecializationQuery(queryString);

  console.log(data);

  console.log(bulk, "bulkSSS");

  const heroDescription =
    "Find your perfect university program with our course guides – covering entry requirements, specializations, career prospects and more.";
  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: `Subject Guide`,
    },
  ];

  return (
    <>
      <SubjectGuidHero
        title="Find your perfect university program"
        shortDescription={heroDescription}
        placeholder="Search University"
        breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
      />

      <div className="container my-[60px] ">
        <div className=" grid lg:grid-cols-3 gap-[30px]">
          {data?.map((item: any, i: any) => {
            return (
              item?.children?.length > 0 && (
                <div
                  key={i}
                  className="group  flex flex-col gap-[20px] border-[1px] border-[#E7E7E7] p-[30px] group hover:shadow-[0_1px_3px_0px_rgba(0,0,0,0.10)] transition-all rounded-md"
                >
                  <Image height={80} width={80} src={sg3} alt="art" />
                  <>
                    <div>
                      <h5 className="mb-1 group-hover:text-gradient cursor-pointer  ">
                        <Link
                          href={`/programs/search?specialization=${item?.title}`}
                        >
                          {item?.title}
                        </Link>
                      </h5>
                      <p className="text-[#7A868B] mb-[10px]">
                        {item?.children?.length} Courses
                      </p>
                      {item?.children?.slice(0, 5).map((item: any, i: any) => {
                        return (
                          <Link
                            key={i}
                            href={`/programs/search?specialization=${item?.title}`}
                            className=" flex gap-[10px] mb-2  items-center "
                          >
                            <HiArrowRight className="text-lg text-secondary transition-all" />
                            <span className=" leading-[1.6]">
                              {item?.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                </div>
              )
            );
          })}
        </div>
        <div>
          <FeatureArticle classes={{ root: "pt-8 lg:pt-[70px]" }} />
        </div>
      </div>
    </>
  );
};

export default SubjectGuidePage;

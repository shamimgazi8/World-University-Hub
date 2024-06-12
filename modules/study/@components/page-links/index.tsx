import Skeleton from "@/modules/@common/skeleton";
import { Spin } from "antd";
import Link from "next/link";
import React from "react";

interface propTypes {
  data: any;
  regionSlug?: string;
  countrySlug?: string;
  pageSlug?: string;
  countryName?: string;
  isLoading?: any;
  isError?: any;
}

const PageLinks = ({
  data,
  regionSlug,
  countrySlug,
  pageSlug,
  countryName,
  isLoading,
  isError,
}: propTypes) => {
  return (
    <>
      {isLoading && !isError ? (
        <div className="container flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <>
          {data?.length > 0 && (
            <div className="bg-grey">
              <div className="container">
                <ul className="flex gap-x-8 snap-x lg:overflow-auto overflow-x-scroll  ">
                  <li>
                    <Link
                      href={`/study-abroad/${regionSlug}/${countrySlug}`}
                      className="relative inline-flex flex-col whitespace-nowrap py-4 font-medium group/pagelink transition-all"
                    >
                      <span className="group-hover/pagelink:text-gradient">
                        Study in {countryName}
                      </span>
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] inline-block bg-gradient-to-r from-primary to-secondary w-0 group-hover/pagelink:visible group-hover/pagelink:w-full transition-all ${
                          !pageSlug ? "visible w-full" : "invisible"
                        }`}
                      ></span>
                    </Link>
                  </li>
                  {data?.map((item: any, i: number) => {
                    const pageLink = `/study-abroad/${regionSlug}/${countrySlug}/${item?.slug}`;
                    return (
                      <li key={i}>
                        <Link
                          href={pageLink}
                          className="relative inline-flex flex-col whitespace-nowrap py-4 font-medium group/pagelink transition-all"
                        >
                          <span className="group-hover/pagelink:text-gradient">
                            {item?.navTitle}
                          </span>
                          <span
                            className={`absolute left-0 bottom-0 h-[2px] inline-block bg-gradient-to-r from-primary to-secondary w-0 group-hover/pagelink:visible group-hover/pagelink:w-full transition-all ${
                              item?.slug == pageSlug
                                ? "visible w-full"
                                : "invisible"
                            }`}
                          ></span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PageLinks;

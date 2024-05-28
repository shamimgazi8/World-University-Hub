"use client";

import { useState, useEffect } from "react";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import UniversityCard from "../@components/university-card";
import { useGetUniversitiesByCountryQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import { capitalizeFirstLetterOfEveryWord } from "@/helpers/utils";
interface propTypes {
  countrySlug: string;
}

const UniversitiesCountryWise = ({ countrySlug }: propTypes) => {
  const router = useRouter();
  const limit = 12;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [page, setPage] = useState<any>(pageFromRoute || 1);

  const queryParams: any = {
    uniPage: page,
    uniLimit: limit,
    countrySlugs: countrySlug,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } =
    useGetUniversitiesByCountryQuery(queryString);
  const dataArray = data?.data;
  const total: any = data?.totalCount;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (total > limit) {
      router.push(`/${countrySlug}-universities?page=${page}`, {
        scroll: false,
      });
    }
  }, [page]);

  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-secondary-light pt-8 pb-8 lg:pt-[60px] lg:pb-[70px]">
        <div className="container">
          <div className="wrapper-small text-center">
            {countrySlug && (
              <h2 className="h3 text-center">
                {capitalizeFirstLetterOfEveryWord(
                  countrySlug.replace("-", " ")
                )}{" "}
                Universities
              </h2>
            )}

            <p className="mb-0">
              There’s a perfect university out there for every student. And
              we’re here to help you find yours. World University Hub brings
              together universities and institutions from major study abroad
              destinations to a single place - right here! Explore the options
              available to you, using our intuitive filters to shortlist the
              study abroad choices best matching your requirements. Our
              AI-powered search engine helps you turn hours of unproductive
              research into a matter of minutes, with precise, personalised
              results to give you that definitive head start toward your dream
              university.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-5 lg:pt-10">
        <div className="container">
          {isLoading && !isError ? (
            <div className="mt-5 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {new Array(12).fill(1).map((_, i) => {
                return <Skeleton key={i} className={"h-[400px]"} />;
              })}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dataArray?.map((item: any, i: number) => {
                  return <UniversityCard data={item} key={i} />;
                })}
              </div>
            </>
          )}

          {total > limit ? (
            <div className="mt-6 lg:mt-10">
              <PaginationComponent
                onChange={onChange}
                total={total}
                page={page}
                limit={limit}
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default UniversitiesCountryWise;

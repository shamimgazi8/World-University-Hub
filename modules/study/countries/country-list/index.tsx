"use client";

import { useState, useEffect } from "react";
import CountryCard2 from "../../@components/country-card2";
import MessageForm from "../../@components/form";
import { useRouter, useSearchParams } from "next/navigation";
import { generateQueryString } from "@/helpers/utils";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
import NoDataFound from "@/modules/@common/no-data-found-page";

interface propTypes {
  regionSlug: string;
}

const StudyCountryList = ({ regionSlug }: propTypes) => {
  const router = useRouter();
  const limit = 6;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [page, setPage] = useState<any>(pageFromRoute || 1);

  const queryParams: any = {
    limit,
    page,
    // topCountries: true,
    region: regionSlug,
  };

  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetCountriesQuery(queryString);
  const dataArray = data?.data;
  const total = data && data?.totalCount;
  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (total > limit) {
      router.push(`/study-abroad/${regionSlug}?page=${page}`, {
        scroll: false,
      });
    }
  }, [page]);

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div>
            {!isError && isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {new Array(10).fill(1).map((_, i) => {
                  return <Skeleton key={i} className={"h-[500px]"} />;
                })}
              </div>
            ) : dataArray?.length < 1 ? (
              <NoDataFound />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dataArray?.map((item: any, i: number) => {
                  return (
                    <CountryCard2 regionSlug={regionSlug} key={i} data={item} />
                  );
                })}
              </div>
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
          <div className="self-start">
            <MessageForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyCountryList;

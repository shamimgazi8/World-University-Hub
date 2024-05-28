"use client";

import { useGetProgramsByLevelQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Link from "next/link";
import { BsBookHalf } from "react-icons/bs";

interface propTypes {
  universitySlug: string;
}

const ProgramByLevel = ({ universitySlug }: propTypes) => {
  const queryString = generateQueryString({ uniSlug: universitySlug });
  const { data, isLoading, isError } = useGetProgramsByLevelQuery(queryString);
  const dataArr = data && data?.data;
  const len = data && dataArr?.length;

  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="flex gap-4">
            {new Array(4).fill(1).map((_, i) => {
              return <Skeleton key={i} className={"h-[50px]"} />;
            })}
          </div>
        </section>
      ) : (
        <>
          {len > 0 ? (
            <section className="pb-8">
              <div className="border-b mb-5">
                <h3 className="h5">Programs by Level</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {dataArr?.map((item: any, i: number) => {
                  return (
                    <Link
                      key={i}
                      href={`/universities/${universitySlug}/courses?courseLevel=${item?.slug}`}
                      className="flex items-center gap-2 border py-2 px-4 hover:text-gradient hover:shadow-two hover:border-transparent rounded"
                    >
                      <BsBookHalf />
                      <span className="font-semibold">{item?.name}</span>
                    </Link>
                  );
                })}
              </div>
              <Link
                href={`/universities/${universitySlug}/courses`}
                className="btn btn-primary mt-4 rounded"
              >
                View ALL Programs
              </Link>
            </section>
          ) : null}
        </>
      )}
    </>
  );
};

export default ProgramByLevel;
